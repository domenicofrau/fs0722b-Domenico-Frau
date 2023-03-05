package com.example.GestionePrenotazioni.model;

import java.util.List;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Utente {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idUtente;
	// @Column (unique = true)
	private String username;
	private String nome;
	private String cognome;
	private String email;

	@OneToMany(mappedBy = "utente")
	private List<Prenotazione> prenotazione;

	@Override
	public String toString() {
		return "Utente [idUtente=" + idUtente + ", username=" + username + ", nome=" + nome + ", cognome=" + cognome
				+ ", email=" + email + "]";
	}

}
