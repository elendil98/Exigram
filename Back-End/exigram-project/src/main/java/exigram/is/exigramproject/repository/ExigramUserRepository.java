package exigram.is.exigramproject.repository;

import org.springframework.stereotype.Repository;

import exigram.is.exigramproject.model.database.ExigramUser;
import it.simyth.jwtsecurity.repositories.BaseProfileRepository;

@Repository
public interface ExigramUserRepository extends BaseProfileRepository<ExigramUser> {
}
