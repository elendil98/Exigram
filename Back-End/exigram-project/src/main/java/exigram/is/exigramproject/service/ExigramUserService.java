package exigram.is.exigramproject.service;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.repository.ExigramUserRepository;
import it.simyth.jwtsecurity.services.BaseProfileService;

public interface ExigramUserService extends BaseProfileService<ExigramUser> {
    ExigramUser findExigramUserByUsername(String username);
    ExigramUserRepository getExigramUserRepository();
}