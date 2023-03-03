package com.example.GestionePrenotazioni.runners;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.example.GestionePrenotazioni.model.Edificio;
import com.example.GestionePrenotazioni.model.Postazione;
import com.example.GestionePrenotazioni.model.Prenotazione;
import com.example.GestionePrenotazioni.model.Utente;
import com.example.GestionePrenotazioni.services.GestionePrenotazioniService;
import com.example.GestionePrenotazioni.utils.Tipo;

@Component
public class GestionePrenotazioniRun implements ApplicationRunner {

	@Autowired
	GestionePrenotazioniService srv;

	@Override
	public void run(ApplicationArguments args) throws Exception {

		Utente user1 = new Utente();
		user1.setNome("Domenico");
		user1.setCognome("Frau");
		user1.setEmail("domenico.frau@outlook.com");
		user1.setUsername("domenicofrau");

		// srv.UtenteSalva(user1);

		Edificio build1 = new Edificio();
		build1.setNome("EpicPalace");
		build1.setCitta("Cagliari");
		build1.setIndirizzo("Via Roma, 20");

		// srv.EdificioSalva(build1);
		Edificio build2 = srv.EdificioGetById(1);

		Postazione room1 = new Postazione();
		room1.setEdificio(build2);
		room1.setDescrizione("Postazione di lavoro");
		room1.setTipoSala(Tipo.PRIVATO);
		room1.setNumeroMaxOccupanti(15);

		// srv.PostazioneSalva(room1);
		Utente user2 = srv.UtenteGetById(1);
		Postazione room2 = srv.PostazioneGetById(1);

		Prenotazione book1 = new Prenotazione();
		book1.setGiorno(LocalDate.of(2023, 10, 11));
		book1.setUtente(user2);
		book1.setPostazione(room2);

		// srv.PrenotazioneSalva(book1);

	}

}
