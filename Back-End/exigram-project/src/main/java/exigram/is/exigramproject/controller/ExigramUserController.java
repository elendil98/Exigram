package exigram.is.exigramproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exigram.is.exigramproject.model.dto.ExigramUserDto;
import exigram.is.exigramproject.service.ExigramUserMapperService;
import exigram.is.exigramproject.service.ExigramUserService;

@RestController
@RequestMapping("/users")
public class ExigramUserController {

    @Autowired
    private ExigramUserService exigramUserService;

    @Autowired
    private ExigramUserMapperService exigramUserMapperService;

    @PostMapping("/create")
    public ExigramUserDto createProfileAnonymously(@RequestBody ExigramUserDto exigramUserDto) {

        return exigramUserMapperService.toExigramUserDto(
            exigramUserService.createProfileAnonymously(
            exigramUserMapperService.toExigramUser(exigramUserDto)));

    }

    @GetMapping("/get")
    public ExigramUserDto getProfile() {

        return exigramUserMapperService.toExigramUserDto(
            exigramUserService.getProfile());
    
    }

}