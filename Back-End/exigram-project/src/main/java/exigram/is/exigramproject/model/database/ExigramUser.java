package exigram.is.exigramproject.model.database;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import it.simyth.jwtsecurity.models.BaseProfile;
import it.simyth.jwtsecurity.models.database.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;

@Entity
@Data
@NoArgsConstructor
public class ExigramUser implements BaseProfile{

    public ExigramUser(User user) {
        this.user = user;
    }

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    @OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(nullable = false)
    private User user;

    private String firstName;
    private String lastName;
    private String biography;

}