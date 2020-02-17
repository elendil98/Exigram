package exigram.is.exigramproject.utils;

import java.util.Base64;

import org.springframework.stereotype.Service;

import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.model.dto.PostDto;

@Service
public class PostImageCoder {

    public static Post decodePostImage(PostDto postDto) {
        Post post = new Post();
        if(postDto.getPostImage() != null) {
            byte[] decodedImage = Base64.getDecoder().decode(postDto.getPostImage());
            post.setPostImage(decodedImage);
            post.setDescription(postDto.getDescription());
            post.setVotes(postDto.getVotes());
            post.setExigramUser(postDto.getExigramUser());
        }
        if(postDto.getId() != null){
            post.setId(postDto.getId());
        }
        return post;
    }

    public static PostDto encodePostImage(Post post) {
        PostDto postDto = new PostDto();
        if(post.getPostImage() != null) {
            byte[] encodedImage = Base64.getEncoder().encode(post.getPostImage());
            postDto.setPostImage(new String(encodedImage));
            postDto.setDescription(post.getDescription());
            postDto.setVotes(post.getVotes());
            postDto.setExigramUser(post.getExigramUser());
        }
        if(post.getId() != null){
            postDto.setId(post.getId());
        }
        return postDto;
    }

}