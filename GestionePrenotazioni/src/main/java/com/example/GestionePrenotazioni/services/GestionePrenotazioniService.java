package com.example.GestionePrenotazioni.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.GestionePrenotazioni.model.Edificio;
import com.example.GestionePrenotazioni.model.Postazione;
import com.example.GestionePrenotazioni.model.Prenotazione;
import com.example.GestionePrenotazioni.model.Utente;
import com.example.GestionePrenotazioni.repo.EdificioRepository;
import com.example.GestionePrenotazioni.repo.PostazioneRepository;
import com.example.GestionePrenotazioni.repo.PrenotazioneRepository;
import com.example.GestionePrenotazioni.repo.UtenteRepository;

@Service
public class GestionePrenotazioniService {

	@Autowired
	UtenteRepository utenteRepository;
	@Autowired
	EdificioRepository edificioRepository;
	@Autowired
	PostazioneRepository postazioneRepository;
	@Autowired
	PrenotazioneRepository prenotazioneRepository;

	// ---------------------------------------------------- UTENTE
	public void UtenteSalva(Utente u) {
		utenteRepository.save(u);
		System.out.println("-- UTENTE SALVATO --");
	}

	public void UtenteElimina(Utente u) {
		utenteRepository.delete(u);
		System.out.println("-- UTENTE ELIMINATO --");
	}

	public Utente UtenteGetById(int id) {
		return utenteRepository.findById(id).get();
	}

	public List<Utente> UtenteGetAll() {
		return (List<Utente>) utenteRepository.findAll();
	}

	// ---------------------------------------------------- EDIFICIO
	public void EdificioSalva(Edificio e) {
		edificioRepository.save(e);
		System.out.println("-- EDIFICIO SALVATO --");
	}

	public void EdificioElimina(Edificio e) {
		edificioRepository.delete(e);
		System.out.println("-- EDIFICIO ELIMINATO --");
	}

	public Edificio EdificioGetById(int id) {
		return edificioRepository.findById(id).get();
	}

	public List<Edificio> EdificioGetAll() {
		return (List<Edificio>) edificioRepository.findAll();
	}

	// ---------------------------------------------------- POSTAZIONE
	public void PostazioneSalva(Postazione pos) {
		postazioneRepository.save(pos);
		System.out.println("-- POSTAZIONE SALVATA --");
	}

	public void PostazioneElimina(Postazione pos) {
		postazioneRepository.delete(pos);
		System.out.println("-- POSTAZIONE ELIMINATA --");
	}

	public Postazione PostazioneGetById(int id) {
		return postazioneRepository.findById(id).get();
	}

	public List<Postazione> PostazioneGetAll() {
		return (List<Postazione>) postazioneRepository.findAll();
	}

	// ---------------------------------------------------- PRENOTAZIONE
	public void PrenotazioneSalva(Prenotazione pre) {
			prenotazioneRepository.save(pre);
			System.out.println("-- PRENOTAZIONE SALVATA --");		
	}

	public void PrenotazioneElimina(Prenotazione pre) {
		prenotazioneRepository.delete(pre);
		System.out.println("-- PRENOTAZIONE ELIMINATA --");
	}

	public Prenotazione PrenotazioneGetById(int id) {
		return prenotazioneRepository.findById(id).get();
	}

	public List<Prenotazione> PrenotazioneGetAll() {
		return (List<Prenotazione>) prenotazioneRepository.findAll();
	}
}
