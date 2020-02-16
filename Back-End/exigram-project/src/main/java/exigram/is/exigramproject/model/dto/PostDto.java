package exigram.is.exigramproject.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostDto {

    private ExigramUserDto exigramUserDto;
    private String postImage;
    private String description;
    private int votes;

} 