package dao;

import java.util.List;

import javax.persistence.Query;

import entities.ElementoBiblioteca;
import entities.Libro;
import entities.Rivista;
import utils.JpaUtil;

public class ElementoDAO extends JpaUtil {

	public void saveElemento(ElementoBiblioteca eb) {
		
		try {
			
			t.begin();
			em.persist(eb);
			t.commit();
			
			System.out.println( "Elemento Biblioteca inserito correttamente" );
		} catch(Exception e) {
			System.out.println( "ERRORE durante l'inserimento dell'Elemento Biblioteca!!" );
		}
		
	}
	
	public static void eliminaElementoByIsbn(long codiceIsbn) {
		
		try {
			
			ElementoBiblioteca e = em.find(ElementoBiblioteca.class, codiceIsbn);
			
			if( e == null ) {
				System.out.println( "Il testo con codice ISBN" + codiceIsbn + " non è stato trovato!" );
				return;
			}
			
			t.begin();
			em.remove(e);
			System.out.println( "Il libro" + e.getTitolo() + ": è stato eliminato correttamente!" );
			t.commit();
			
		} catch(Exception e) {
			System.out.println( "Testo da eliminare non trovato!!" );
		}
		
	}
	
	// RICERCA ISBN --------------------------------------------------------------------
	
	public static void ricercaElementoByIsbn(long codiceIsbn) {
		
		try {
			
			ElementoBiblioteca e = em.find(ElementoBiblioteca.class, codiceIsbn);
			
			if( e == null ) {
				System.out.println( "Il testo con codice ISBN" + codiceIsbn + " non è stato trovato!" );
				return;
			}
			
			System.out.println( "Dati testi: " + e.getCodiceIsbn() );
			System.out.printf( 
					"Titolo: %s | Anno pubblicazione: %d | Pagine: %d%n",
					e.getNumeroPagine(), e.getAnnoPubblicazione(), e.getNumeroPagine()
			);
			System.out.println("-----------------------------------------------------------------");
			
		} catch(Exception e) {
			System.out.println( "Testi non trovati!!" );
		}
	}
	
	// RICERCA ANNO --------------------------------------------------------------------
	
	public static void ricercaElementoPerAnno(int anno) {
			
			Query query = em.createNamedQuery("ricercaAnno");
			query.setParameter("annoPubblicazione", anno);
			List<ElementoBiblioteca> elemento = query.getResultList();
			System.out.println("Cerco testi pubblicati nell'anno: " + anno);
			if(elemento.isEmpty()) {
				System.out.println( "Nessun testo trovato!!" );
			} else {
				for(ElementoBiblioteca e : elemento) {
					System.out.println(e);
				}
				System.out.println("-----------------------------------------------------------------");
			}
			
	}
	
	// RICERCA AUTORE --------------------------------------------------------------------
	
	public void ricercaElementoPerAutore(String autore) {
			
			Query query = em.createNamedQuery("ricercaAutore");
			query.setParameter("autore", autore);
			List<Libro> libri = query.getResultList();
			System.out.println("Cerco libri scritti da: " + autore);
			if(libri.isEmpty()) {
				System.out.println( "Nessun libro trovato!!" );
			} else {
				for(Libro l: libri) {
					System.out.println(l);
				}
				System.out.println("-----------------------------------------------------------------");
			}
			
	}
	
	// RICERCA TITOLO --------------------------------------------------------------------
	
	public void ricercaElementoPerTitolo(String titolo) {
			
			Query query = em.createNamedQuery("ricercaTitolo");
			query.setParameter("titolo", "%"+titolo+"%");
			List<ElementoBiblioteca> elemento = query.getResultList();
			System.out.println("Cerco testi con titolo: " + titolo);
			if(elemento.isEmpty()) {
				System.out.println( "Nessun elemento trovato!!" );
			} else {
				for(ElementoBiblioteca e: elemento) {
					System.out.println(e);
				}
				System.out.println("-----------------------------------------------------------------");
			}
		
	}
	
}
