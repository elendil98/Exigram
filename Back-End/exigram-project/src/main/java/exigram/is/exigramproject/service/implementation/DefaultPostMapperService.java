package exigram.is.exigramproject.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.model.dto.PostDto;
import exigram.is.exigramproject.service.PostMapperService;

@Service
public class DefaultPostMapperService implements PostMapperService {

    @Autowired
    PostMapperService postMapperService;

    ModelMapper modelMapper;

    public DefaultPostMapperService() {
        modelMapper = new ModelMapper();
    }

    @Override
    public Post toPost(PostDto postDto) {
        //Possibile necessità di aggiungere il setExigramUser()
        Post post = modelMapper.map(postDto, Post.class);
        return post;
    }

    @Override
    public PostDto toPostDto(Post post) {
        //Possibile necessità di aggiungere il setExigramUser()
        PostDto postDto = modelMapper.map(post, PostDto.class);
        return postDto;
    }

}