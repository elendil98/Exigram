package exigram.is.exigramproject.service;

import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.repository.PostRepository;

public interface PostService {
    Post getPostById(Long id);
    Post createPost(Post post);
    void updatePost(Post post);
    void deletePost(Post post);
    PostRepository getPostRepository();
}