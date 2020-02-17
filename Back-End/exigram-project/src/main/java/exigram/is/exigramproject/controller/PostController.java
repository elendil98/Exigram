package exigram.is.exigramproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.model.dto.ExigramUserDto;
import exigram.is.exigramproject.model.dto.PostDto;
import exigram.is.exigramproject.service.ExigramUserMapperService;
import exigram.is.exigramproject.service.ExigramUserService;
import exigram.is.exigramproject.service.PostService;
import exigram.is.exigramproject.utils.PostImageCoder;

import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostService postService;

    @Autowired
    ExigramUserService exigramUserService;

    @Autowired
    ExigramUserMapperService exigramUserMapperService;


    @GetMapping("/getallposts")
    public List<Post> getAllUserPost(@RequestBody ExigramUserDto exigramUserDto) {
        ExigramUser exigramUser = exigramUserMapperService.toExigramUser(exigramUserDto);
        return postService.getPostByExigramUserId(exigramUser);
    }

    @PostMapping("/create")
    public void createPost(@RequestBody PostDto postDto) {
        ExigramUser currentUser = exigramUserService.getProfile();
        if(currentUser == null){
            throw new IllegalAccessError("unauthorized");
        }
        postDto.setExigramUser(currentUser);
        Post post = PostImageCoder.decodePostImage(postDto);
        postService.getPostRepository().save(post);
    }
    
    @PutMapping("/update")
    public void updatePost(@RequestBody PostDto postDto) {
        ExigramUser currentUser = exigramUserService.getProfile();
        if(currentUser == null){
            throw new IllegalAccessError("unauthorized");
        }
        postService.updatePost(PostImageCoder.decodePostImage(postDto));
    }
 
    @PutMapping("/delete")
    public void deletePost(@RequestBody PostDto postDto) {
        ExigramUser currentUser = exigramUserService.getProfile();
        if(currentUser == null){
            throw new IllegalAccessError("unauthorized");
        }
        postService.deletePost(PostImageCoder.decodePostImage(postDto));
    }

}