package com.example.GestionePrenotazioni.model;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Edificio {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idEdificio;
	private String nome;
	private String indirizzo;
	private String citta;

	@OneToMany(mappedBy = "edificio")
	private List<Postazione> postazione;

	@Override
	public String toString() {
		return "Edificio [idEdificio=" + idEdificio + ", nome=" + nome + ", indirizzo=" + indirizzo + ", citta=" + citta
				+ "]";
	}

}