package exigram.is.exigramproject.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.repository.PostRepository;
import exigram.is.exigramproject.service.PostService;

@Service
public class DefaultPostService implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    public Post findUserPostById(Long postId) {
        return postRepository.findPostById(postId);
    }

    @Override
    public Post getPost(Long id) {
        return postRepository.findPostById(id);
    }

    @Override
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void updatePost(Post post) {
        postRepository.save(post);
    }

    @Override
    public void deletePost() {
        
    }

}