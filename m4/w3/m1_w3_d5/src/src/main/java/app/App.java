package app;

import java.time.LocalDate;

import dao.ElementoDAO;
import dao.PrestitoDAO;
import dao.UtenteDAO;
import entities.ElementoBiblioteca;
import entities.Libro;
import entities.Periodicita;
import entities.Prestito;
import entities.Rivista;
import entities.Utente;

public class App {

	public static void main(String[] args) {
		
		//Libro libro = saveLibro();
		//Rivista rivista = saveRivista();
		//Utente utente = saveUtente();
		//Prestito prestito = savePrestito(utente, libro);
		
		//eliminaElemento();
		//cercaPerIsbn();
		//cercaPerAnno();
		//cercaPerAutore();
		//cercaPerTitolo();
		
		//cercaPerTessera();
		cercaScaduti();

	}
	
	public static Libro saveLibro() {
		Libro l = new Libro();
		l.setAnnoPubblicazione(1883);
		l.setAutore("Carlo Collodi");
		l.setTitolo("Pinocchio");
		l.setGenere("Favola");
		l.setNumeroPagine(300);
		
		ElementoDAO libro = new ElementoDAO();
		libro.saveElemento(l);
		
		return l;
	}
	
	public static Rivista saveRivista() {
		Rivista r = new Rivista();
		r.setTitolo("Focus");
		r.setPeriodicita(Periodicita.SETTIMANALE);
		r.setAnnoPubblicazione(2022);
		r.setNumeroPagine(100);
		
		ElementoDAO rivista = new ElementoDAO();
		rivista.saveElemento(r);
		
		return r;
	}
	
	public static Utente saveUtente() {
		Utente u = new Utente();
		u.setNome("Anna");
		u.setCognome("Bianchi");
		u.setDatanascita(LocalDate.parse("1999-10-25"));
		
		UtenteDAO utente = new UtenteDAO();
		utente.saveUtente(u);
		
		return u;
	}
	
	public static Prestito savePrestito(Utente utente, ElementoBiblioteca e) {
		Prestito p = new Prestito();
		p.setUtente_id(utente.getNumerotessera());
		p.setPrestato(e.getTitolo());
		p.setInizioPrestito(LocalDate.parse("2022-12-15"));
		p.setRestituzionePrevista(p.getInizioPrestito().plusDays(30));
		p.setRestituzioneEffettiva(null);
		
		PrestitoDAO prestito = new PrestitoDAO();
		prestito.savePrestito(p);
		
		return p;
	}
	
	public static void eliminaElemento() {
		ElementoDAO elemento = new ElementoDAO();
		elemento.eliminaElementoByIsbn(450000000000600L);
	}
	
	public static void cercaPerIsbn() {
		ElementoDAO elemento = new ElementoDAO();
		elemento.ricercaElementoByIsbn(450000000000650L);
	}
	
	public static void cercaPerAnno() {
		ElementoDAO elemento = new ElementoDAO();
		elemento.ricercaElementoPerAnno(2023);
	}
	
	public static void cercaPerAutore() {
		ElementoDAO elemento = new ElementoDAO();
		elemento.ricercaElementoPerAutore("J. K. Rowling");
	}
	
	public static void cercaPerTitolo() {
		ElementoDAO elemento = new ElementoDAO();
		elemento.ricercaElementoPerTitolo("Le cronache");
	}
	
	public static void cercaPerTessera() {
		PrestitoDAO prestito = new PrestitoDAO();
		prestito.ricercaTessera(2);
	}
	
	public static void cercaScaduti() {
		PrestitoDAO prestito = new PrestitoDAO();
		prestito.ricercaScaduti();
	}

}
