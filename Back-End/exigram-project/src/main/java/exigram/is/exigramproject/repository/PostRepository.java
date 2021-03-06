package exigram.is.exigramproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import exigram.is.exigramproject.model.database.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
     Post findPostById(Long postId);
     List<Post> getPostByExigramUserId(Long postId);
}