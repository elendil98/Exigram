package exigram.is.exigramproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exigram.is.exigramproject.model.dto.PostDto;
import exigram.is.exigramproject.service.PostMapperService;
import exigram.is.exigramproject.service.PostService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostService postService;

    @Autowired
    PostMapperService postMapperService;
/*
    @GetMapping("/get")
    public PostDto getPost() {
       
    }
*/
    @PostMapping("/create")
    public PostDto createPost(@RequestBody PostDto postDto) {
        return postMapperService.toPostDto(postService.createPost(
            postMapperService.toPost(postDto)));
    }
    
    @PutMapping("/update")
    public PostDto updatePost(@RequestBody PostDto postDto) {
        return postDto;
    }
 
    @PutMapping("/delete")
    public void deletePost() {
        
    }

}