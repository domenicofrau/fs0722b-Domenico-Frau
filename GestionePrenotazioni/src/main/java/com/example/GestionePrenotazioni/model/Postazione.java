package com.example.GestionePrenotazioni.model;

import java.util.List;
import com.example.GestionePrenotazioni.utils.Tipo;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Postazione {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idPostazione;
	private Integer numeroMaxOccupanti;
	private String descrizione;

	@Enumerated(EnumType.STRING)
	private Tipo tipoSala;
	
	@ManyToOne
	@JoinColumn(name = "idedificio")
	private Edificio edificio;
	
	@OneToMany(mappedBy = "postazione")
	private List <Prenotazione> prenotazione;

	@Override
	public String toString() {
		return "Postazione [idPostazione=" + idPostazione + ", numeroMaxOccupanti=" + numeroMaxOccupanti
				+ ", descrizione=" + descrizione + ", tipoSala=" + tipoSala + ", edificio=" + edificio + "]";
	}
	
	
}

