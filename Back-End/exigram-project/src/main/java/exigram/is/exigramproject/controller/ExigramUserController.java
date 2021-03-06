package exigram.is.exigramproject.controller;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.model.dto.ExigramUserDto;
import exigram.is.exigramproject.service.ExigramUserMapperService;
import exigram.is.exigramproject.service.ExigramUserService;
import exigram.is.exigramproject.utils.RecoverPasswordUtil;

import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/users")
public class ExigramUserController {

    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ExigramUserService exigramUserService;

    @Autowired
    private ExigramUserMapperService exigramUserMapperService;

    @PostMapping("/create")
    public ExigramUserDto createProfile(@RequestBody ExigramUserDto exigramUserDto) throws IOException {
        // Creo un immagine con un buffer accessibile
        URL url = getClass().getResource("defaultUserImage.png");
        BufferedImage bufferedImage = ImageIO.read(url);
        ByteArrayOutputStream byteArray = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "png", byteArray);
        byte[] imageData = byteArray.toByteArray();
        
        // Creo prima l'utente, per poi settargli l'immagine di default
        ExigramUser exigramUser = exigramUserService.createProfileAnonymously(
        exigramUserMapperService.toExigramUser(exigramUserDto));
        exigramUser.setUserImage(imageData);
        exigramUserService.getExigramUserRepository().save(exigramUser);
        return exigramUserMapperService.toExigramUserDto(exigramUser);
    }

    @GetMapping("/get/{username}")
    public ExigramUserDto getProfileByUsername(@PathVariable String username) {
            return exigramUserMapperService.toExigramUserDto(
            exigramUserService.findExigramUserByUsername(username));
    }

    @GetMapping("/get")
    public ExigramUserDto getActiveProfile() {
        ExigramUser currentUser = exigramUserService.getProfile();
        if(currentUser == null){
            throw new IllegalAccessError("unauthorized");
        }
        return exigramUserMapperService.toExigramUserDto(currentUser);
    }

    @GetMapping("/getAll")
    public List<ExigramUserDto> getAllProfiles() {
        List<ExigramUser> list = exigramUserService.getAllExigramUsers();
        List<ExigramUserDto> listDto = new ArrayList<>();
        for(int i = 0; i < list.size(); i++) {
            listDto.add(exigramUserMapperService.toExigramUserDto(list.get(i)));
        }
        //Controllo lista vuota
        return listDto;
    }

    // Utilizzo di post per evitare di mandare la password, invece di get
    @PostMapping("/login")
    public ExigramUserDto getProfile(@RequestBody ExigramUserDto exigramUserDto) {
        ExigramUser exigramUser = exigramUserMapperService.toExigramUser(exigramUserDto);
        return exigramUserMapperService.toExigramUserDto(exigramUserService.getProfile(
            exigramUser.getUser().getUsername(), exigramUser.getUser().getPassword()));
    }

    @PostMapping("/update")
    public void updateProfile(@RequestBody ExigramUserDto exigramUserDto) {
        ExigramUser currentUser = exigramUserService.getProfile();
        if(currentUser == null){
            throw new IllegalAccessError("unauthorized");
        }
        if(!currentUser.getUser().getUsername().equals(exigramUserDto.getUserDto().getUsername())) {
            throw new IllegalAccessError("not same user");
        }
        ExigramUser newUser = exigramUserMapperService.toExigramUser(exigramUserDto);
        ExigramUser oldUser = exigramUserService.getExigramUserRepository().findByUserUsername(newUser.getUser().getUsername());
        oldUser.setFirstName(newUser.getFirstName());
        oldUser.setLastName(newUser.getLastName());
        oldUser.getUser().setUsername(newUser.getUser().getUsername());
        oldUser.setBiography(newUser.getBiography());
        exigramUserService.getExigramUserRepository().save(oldUser);
    }

    @PutMapping("/update/password")
    public void updateProfilePassword(@RequestBody ExigramUserDto exigramUserDto) {
        ExigramUser currentUser = exigramUserService.getProfile();
        if(currentUser == null){
            throw new IllegalAccessError("unauthorized");
        }
        if(!currentUser.getUser().getUsername().equals(exigramUserDto.getUserDto().getUsername())) {
            throw new IllegalAccessError("not same user");
        }
        ExigramUser newUser = exigramUserMapperService.toExigramUser(exigramUserDto);
        ExigramUser oldUser = exigramUserService.getExigramUserRepository().findByUserUsername(newUser.getUser().getUsername());
        oldUser.getUser().setPassword(passwordEncoder.encode(newUser.getUser().getPassword()));
        exigramUserService.getExigramUserRepository().save(oldUser);
    }

    @PostMapping("/update/image")
    public void updateProfileImage(@RequestBody ExigramUserDto exigramUserDto) {
        ExigramUser currentUser = exigramUserService.getProfile();
        if(currentUser == null){
            throw new IllegalAccessError("unauthorized");
        }
        if(!currentUser.getUser().getUsername().equals(exigramUserDto.getUserDto().getUsername())) {
            throw new IllegalAccessError("not same user");
        }
        ExigramUser newUser = exigramUserMapperService.toExigramUser(exigramUserDto);
        currentUser.setUserImage(newUser.getUserImage());
        exigramUserService.getExigramUserRepository().save(currentUser);
    }


    @PostMapping("/delete")
    public void deleteProfile() {
        exigramUserService.deleteProfile(exigramUserService.getProfile());
    }

    @PostMapping("/remove")
    public void removeProfile(@RequestBody ExigramUserDto exigramUserDto) {
        // Removing login privileges using jpa directly without using service
        exigramUserService.getExigramUserRepository().delete(
            exigramUserService.findExigramUserByUsername(exigramUserDto.getUserDto().getUsername())
        );
    }

    @PutMapping("/recover")
    public void recoverProfile(@RequestBody ExigramUserDto exigramUserDto) {
        ExigramUser exigramUser = exigramUserService.findExigramUserByUsername(
            exigramUserMapperService.toExigramUser(exigramUserDto).getUser().getUsername());
            
        String recoverPassword = RecoverPasswordUtil.getRecoverPassword();
        exigramUser.getUser().setPassword(passwordEncoder.encode(recoverPassword));
        emailSender.send(RecoverPasswordUtil.createMail(exigramUser.getUser().getEmail(), recoverPassword));
        exigramUserService.getExigramUserRepository().save(exigramUser);
    }

}