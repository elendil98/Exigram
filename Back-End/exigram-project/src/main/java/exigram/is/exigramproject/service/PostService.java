package exigram.is.exigramproject.service;

import exigram.is.exigramproject.model.database.Post;

public interface PostService {
    Post getPost();
    Post updatePost();
    Post createPost(Post post);
    Post findUserPostById(Long id);
}