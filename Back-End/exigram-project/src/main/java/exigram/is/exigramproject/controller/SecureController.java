package exigram.is.exigramproject.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/secure")
public class SecureController {

	@GetMapping("/anonymous")
	public String anonymous() {
		return "Anonymous";
	}

	@GetMapping("/protected")
	@PreAuthorize("@jwtSecurity.hasAuthorities('Admin')")
	public String admin() {
		return "Protected";
	}

	@GetMapping("/inexistent")
	@PreAuthorize("@jwtSecurity.hasAuthorities('Inexistent')")
	public String inexistent() {
		return "Inexistent";
	}

	@GetMapping("/userAnyAuthority")
	@PreAuthorize("@jwtSecurity.hasAnyAuthority('Authority1', 'Authority2')")
	public String userAnyAuthority() {
		return "User Any Authority";
	}

	@GetMapping("/userAllAuthorities")
	@PreAuthorize("@jwtSecurity.hasAuthorities('Authority1', 'Authority2')")
	public String userAllAuthorities() {
		return "User All Authorities";
	}
}