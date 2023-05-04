package dao;

import java.util.List;

import javax.persistence.Query;

import entities.ElementoBiblioteca;
import entities.Prestito;
import utils.JpaUtil;

public class PrestitoDAO extends JpaUtil {

	public void savePrestito(Prestito p) {
		
		try {
			
			t.begin();
			em.persist(p);
			t.commit();
			
			System.out.println( "Prestito inserito correttamente" );
		} catch(Exception e) {
			System.out.println( "ERRORE durante l'inserimento del prestito!!" );
		}
		
	}
	
	// RICERCA TESSERA --------------------------------------------------------------------
	
	public void ricercaTessera(int tessera) {
			
			Query query = em.createNamedQuery("ricercaTessera");
			query.setParameter("utente_id", tessera);
			List<Prestito> prestito = query.getResultList();
			System.out.println("Cerca testi non consegnati dell'utente con il numero tessera: " + tessera);
			if(prestito.isEmpty()) {
				System.out.println( "Nessun prestito trovato!!" );
			} else {
				for(Prestito p: prestito) {
					System.out.println(p);
				}
				System.out.println("-----------------------------------------------------------------");
			}
			
		
	}
	
	// RICERCA SCADUTI --------------------------------------------------------------------
	
	public void ricercaScaduti() {
			
			Query query = em.createNamedQuery("ricercaPrestitiScaduti");
			List<Prestito> prestito = query.getResultList();
			System.out.println("Cerca testi non consegnati in tempo: ");
			if(prestito.isEmpty()) {
				System.out.println( "Nessun prestito trovato!!" );
			} else {
				for(Prestito p: prestito) {
					System.out.println(p);
				}
				System.out.println("-----------------------------------------------------------------");
			}
			
	}
	
}
