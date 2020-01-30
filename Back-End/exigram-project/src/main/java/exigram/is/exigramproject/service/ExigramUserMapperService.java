package exigram.is.exigramproject.service;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.model.dto.ExigramUserDto;

public interface ExigramUserMapperService {

    /**
     * Take an ExigramUserDto and return an ExigramUser
     * @param exigramUserDto
     * @return
     */
    ExigramUser toExigramUser(ExigramUserDto exigramUserDto);

    /**
     * Take an ExigramUser and return an ExigramUserDto
     * @param exigramUserDto
     * @return
     */
    ExigramUserDto toExigramUserDto(ExigramUser exigramUser);

}