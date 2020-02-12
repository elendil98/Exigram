package exigram.is.exigramproject.model.dto;

import it.simyth.jwtsecurity.models.dto.UserDto;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ExigramUserDto {

    private UserDto userDto;
    private byte[] userImage;
    private String firstName;
    private String lastName;
    private String biography;

}