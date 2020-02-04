package exigram.is.exigramproject.service;

import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.model.dto.PostDto;

public interface PostMapperService {

    /**
     * get a postDto and convert it to a Post
     * @param postDto
     * @return
     */
    Post toPost(PostDto postDto);

    /**
     * get a post and convert it to a postSto
     * @param post
     * @return
     */
    PostDto toPostDto(Post post);

}