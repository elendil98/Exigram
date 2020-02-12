package exigram.is.exigramproject.controller;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/get")
    public ExigramUserDto getProfile() {
        return exigramUserMapperService.toExigramUserDto(
            exigramUserService.getProfile());
    }

    // Utilizzo di post per evitare di mandare la password, invece di get
    @PostMapping("/login")
    public ExigramUserDto getProfile(@RequestBody ExigramUserDto exigramUserDto) {
        ExigramUser exigramUser = exigramUserMapperService.toExigramUser(exigramUserDto);
        return exigramUserMapperService.toExigramUserDto(exigramUserService.getProfile(
            exigramUser.getUser().getUsername(), exigramUser.getUser().getPassword()));
    }

    @PutMapping("/update")
    public void updateProfile(@RequestBody ExigramUserDto exigramUserDto) {
        exigramUserService.updateProfile(exigramUserMapperService.toExigramUser(exigramUserDto));
    }

    @PutMapping("/delete")
    public void deleteProfile() {
        exigramUserService.deleteProfile(exigramUserService.getProfile());
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