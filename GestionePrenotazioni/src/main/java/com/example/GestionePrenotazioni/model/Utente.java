package com.example.GestionePrenotazioni.model;

import java.util.List;

// import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor

public class Utente {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer idUtente;
	//@Column (unique = true)
	private String username;
	private String nome;
	private String cognome;
	private String email;
	
	@OneToMany(mappedBy = "utente")
	private List <Prenotazione> prenotazione;
}
