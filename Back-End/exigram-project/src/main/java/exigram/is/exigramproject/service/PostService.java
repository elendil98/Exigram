package exigram.is.exigramproject.service;

import java.util.List;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.repository.PostRepository;

public interface PostService {
    Post findPostById(Long postId);
    List<Post> getPostByExigramUserId(ExigramUser exigramUser);
    Post createPost(Post post);
    void updatePost(Post post);
    void deletePost(Post post);
    PostRepository getPostRepository();
}