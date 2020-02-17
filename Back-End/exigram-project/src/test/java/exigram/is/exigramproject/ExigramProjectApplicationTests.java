package exigram.is.exigramproject;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.web.WebAppConfiguration;

import exigram.is.exigramproject.model.database.ExigramUser;
import exigram.is.exigramproject.repository.ExigramUserRepository;
import exigram.is.exigramproject.service.ExigramUserService;
import it.simyth.jwtsecurity.models.database.User;

@WebAppConfiguration
@SpringBootTest
class ExigramProjectApplicationTests {

	@Autowired
	ExigramUserRepository exigramUserRepository;

	@Autowired
    private PasswordEncoder passwordEncoder;

	@Autowired
	ExigramUserService exigramUserService;

	@Test
	void contextLoads() {
	}

	@Test
	void exigramUserServicefindExigramUserByUsername() {
		User user = new User();
		user.setAdmin(false);
		user.setEnabled(true);
		user.setAccountNonExpired(true);
		user.setAccountNonLocked(true);
		user.setCredentialsNonExpired(true);
		user.setEmail("emailtest@test.it");;
		user.setUsername("usernametest");
		user.setPassword(passwordEncoder.encode("Passw0rdtest"));
		
		ExigramUser exigramUser = new ExigramUser();
		exigramUser.setFirstName("Nametest");
		exigramUser.setLastName("LastNametest");
		exigramUser.setUser(user);

		exigramUserRepository.save(exigramUser);
		ExigramUser exigramUserCompare = exigramUserService.findExigramUserByUsername(exigramUser.getUser().getUsername());
		exigramUser.setId(exigramUserCompare.getId());
		exigramUser.getUser().setId(exigramUserCompare.getUser().getId());
		exigramUser.getUser().setAuthorities(exigramUserCompare.getUser().getAuthorities());
		assertEquals(exigramUser, exigramUserCompare);
		exigramUserRepository.delete(exigramUser);
	
	}



}
