package exigram.is.exigramproject.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.model.dto.ExigramUserDto;
import exigram.is.exigramproject.service.ExigramUserMapperService;
import it.simyth.jwtsecurity.services.AccountMapperService;

@Service
public class DefaultExigramUserMapperService implements ExigramUserMapperService {

    @Autowired
    private AccountMapperService accountMapperService;

    private ModelMapper modelMapper;

    public DefaultExigramUserMapperService() {
        modelMapper = new ModelMapper();
    }

    @Override
    public ExigramUser toExigramUser(ExigramUserDto exigramUserDto) {

        // Copia uno a uno, in base al nome della variabile: mapping
        ExigramUser exigramUser = modelMapper.map(exigramUserDto, ExigramUser.class);

        // Copia dell'oggetto annidata (Utilizata per più oggetti, ad es)
        exigramUser.setUser(accountMapperService.toUser(exigramUserDto.getUserDto()));
        return exigramUser;
    }
    
    @Override
    public ExigramUserDto toExigramUserDto(ExigramUser exigramUser) {
        ExigramUserDto exigramUserDto = modelMapper.map(exigramUser, ExigramUserDto.class);

        exigramUserDto.setUserDto(accountMapperService.toUserDto(exigramUser.getUser()));
        return exigramUserDto;
    }

}