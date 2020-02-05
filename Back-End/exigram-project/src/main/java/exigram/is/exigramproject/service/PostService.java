package exigram.is.exigramproject.service;

import exigram.is.exigramproject.model.database.Post;

public interface PostService {
    Post getPost(Long id);
    Post createPost(Post post);
    Post findUserPostById(Long id);
    void updatePost(Post post);
    void deletePost();
}