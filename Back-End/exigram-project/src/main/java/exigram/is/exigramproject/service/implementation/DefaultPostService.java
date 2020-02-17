package exigram.is.exigramproject.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exigram.is.exigramproject.model.database.Post;
import exigram.is.exigramproject.repository.PostRepository;
import exigram.is.exigramproject.service.PostService;
import it.simyth.jwtsecurity.services.SessionService;

@Service
public class DefaultPostService implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private SessionService sessionService;

    @Override
    public Post getPostById(Long id) {
        return postRepository.findPostById(id);
    }

    @Override
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void updatePost(Post post) {
        sessionService.update(post);
    }

    @Override
    public void deletePost(Post post) {
        postRepository.delete(post);
    }

    @Override
    public PostRepository getPostRepository() {
        return postRepository;
    }

}