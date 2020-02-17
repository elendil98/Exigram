package exigram.is.exigramproject.service.implementation;

import it.simyth.jwtsecurity.repositories.BaseProfileRepository;
import it.simyth.jwtsecurity.services.implementations.DefaultBaseProfileService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.repository.ExigramUserRepository;
import exigram.is.exigramproject.service.ExigramUserService;

@Service
public class DefaultExigramUserService extends DefaultBaseProfileService<ExigramUser>
	implements ExigramUserService {

	@Autowired
	private ExigramUserRepository exigramUserRepository;

	@Override
	protected BaseProfileRepository<ExigramUser> getProfileRepository() {
		return exigramUserRepository;
	}

	@Override
	public ExigramUser findExigramUserByUsername(String username) {
		return exigramUserRepository.findByUserUsername(username);
	}

	@Override
	public ExigramUserRepository getExigramUserRepository() {
		return exigramUserRepository;
	}

	@Override
	public List<ExigramUser> getAllExigramUsers() {
		return exigramUserRepository.findAll();		
	}

}
