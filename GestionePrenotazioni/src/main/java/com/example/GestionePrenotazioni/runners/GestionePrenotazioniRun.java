package com.example.GestionePrenotazioni.runners;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
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

		// Creazione degli edifici
		// -------------------------------------------------|
		Edificio build1 = new Edificio();
		build1.setNome("EpicPalace - Roma");
		build1.setCitta("Roma");
		build1.setIndirizzo("Via Roma, 20");
		// srv.EdificioSalva(build1);

		Edificio build2 = new Edificio();
		build2.setNome("EpicPalace - Milano");
		build2.setCitta("Milano");
		build2.setIndirizzo("Via S. Paolo, 53");
		// srv.EdificioSalva(build2);

		Edificio build3 = new Edificio();
		build3.setNome("EpicPalace - Torino");
		build3.setCitta("Torino");
		build3.setIndirizzo("Via Garibaldi, 38");
		// srv.EdificioSalva(build3);

		Edificio build4 = new Edificio();
		build4.setNome("EpicPalace - Firenze");
		build4.setCitta("Firenze");
		build4.setIndirizzo("Via degli Alfani, 12");
		// srv.EdificioSalva(build4);

		Edificio build5 = new Edificio();
		build5.setNome("EpicPalace - Bologna");
		build5.setCitta("Bologna");
		build5.setIndirizzo("Via d'Azeglio, 67");
		// srv.EdificioSalva(build5);

		// Creazione dell'utente
		// -------------------------------------------------|
		Utente user1 = new Utente();
		user1.setNome("Domenico");
		user1.setCognome("Frau");
		user1.setEmail("domenico.frau@outlook.com");
		user1.setUsername("domenicofrau");
		// srv.UtenteSalva(user1);

		// Creazione delle postazioni
		// -------------------------------------------------|
		Postazione room1 = new Postazione();
		Edificio build1db = srv.EdificioGetById(1);
		room1.setEdificio(build1db);
		room1.setDescrizione("Postazione di lavoro");
		room1.setTipoSala(Tipo.PRIVATO);
		room1.setNumeroMaxOccupanti(15);
		// srv.PostazioneSalva(room1);

		Postazione room2 = new Postazione();
		room2.setEdificio(build1db);
		room2.setDescrizione("Postazione di lavoro");
		room2.setTipoSala(Tipo.OPENSPACE);
		room2.setNumeroMaxOccupanti(15);
		// srv.PostazioneSalva(room2);

		Postazione room3 = new Postazione();
		Edificio build2db = srv.EdificioGetById(2);
		room3.setEdificio(build2db);
		room3.setDescrizione("Postazione di lavoro");
		room3.setTipoSala(Tipo.SALA_RIUNIONI);
		room3.setNumeroMaxOccupanti(15);
		// srv.PostazioneSalva(room3);

		Postazione room4 = new Postazione();
		Edificio build3db = srv.EdificioGetById(3);
		room4.setEdificio(build3db);
		room4.setDescrizione("Postazione di lavoro");
		room4.setTipoSala(Tipo.PRIVATO);
		room4.setNumeroMaxOccupanti(15);
		// srv.PostazioneSalva(room4);

		Postazione room5 = new Postazione();
		room5.setEdificio(build3db);
		room5.setDescrizione("Postazione di lavoro");
		room5.setTipoSala(Tipo.PRIVATO);
		room5.setNumeroMaxOccupanti(15);
		// srv.PostazioneSalva(room5);

		// Creazione della prenotazione
		// -------------------------------------------------|
		Prenotazione book1 = new Prenotazione();
		Utente user2 = srv.UtenteGetById(1);
		Postazione room1db = srv.PostazioneGetById(1);
		book1.setGiorno(LocalDate.of(2023, 10, 11));
		book1.setUtente(user2);
		book1.setPostazione(room1db);
		//srv.PrenotazioneSalva(book1);

		Edificio buildtest = srv.EdificioGetById(1);
		Utente usertest = srv.UtenteGetById(1);
		Postazione roomtest = srv.PostazioneGetById(1);
		Prenotazione booktest = srv.PrenotazioneGetById(1);

		// TEST
		// -------------------------------------------------|
		// solo per test - System.out.println(buildtest);
		// solo per test - System.out.println(usertest);
		// solo per test - System.out.println(roomtest);
		// solo per test - System.out.println(booktest);

		Postazione room0 = new Postazione();
		room0.setEdificio(build1db);
		room0.setDescrizione("Postazione di lavoro");
		room0.setTipoSala(Tipo.PRIVATO);
		room0.setNumeroMaxOccupanti(15);
		// srv.PostazioneSalva(room0);

		Prenotazione book0 = new Prenotazione();
		Postazione room2db = srv.PostazioneGetById(2);
		book0.setGiorno(LocalDate.of(2023, 10, 11));
		book0.setUtente(user2);
		book0.setPostazione(room2db);
		// srv.PrenotazioneSalva(book0);

		List<Postazione> listaRoomsFinded = new ArrayList<Postazione>();
		listaRoomsFinded = srv.PostazioneGetByTypeAndCity(Tipo.PRIVATO, "Torino");
		// System.out.println(listaRoomsFinded);

	}

}
