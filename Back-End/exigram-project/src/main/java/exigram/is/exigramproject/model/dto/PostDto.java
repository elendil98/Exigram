package exigram.is.exigramproject.model.dto;

import exigram.is.exigramproject.model.database.ExigramUser;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostDto {

    private Long id;
    private ExigramUser exigramUser;
    private String postImage;
    private String description;
    private int votes;

} 