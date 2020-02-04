package exigram.is.exigramproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
    private ExigramUserService exigramUserService;

    @Autowired
    private ExigramUserMapperService exigramUserMapperService;

    @PostMapping("/create")
    public ExigramUserDto createProfile(@RequestBody ExigramUserDto exigramUserDto) {
        return exigramUserMapperService.toExigramUserDto(
            exigramUserService.createProfileAnonymously(
            exigramUserMapperService.toExigramUser(exigramUserDto)));
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

        exigramUser.getUser().setPassword(RecoverPasswordUtil.getRecoverPassword());
        exigramUserService.updateProfile(exigramUser);
    }

}