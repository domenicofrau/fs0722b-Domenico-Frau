package esercizio02;

import java.util.Scanner;

public class ContatoreAuto {

	Scanner in = new Scanner(System.in);
	
	public void inserisciDati() throws NullException {
		System.out.println( "Inserisci i Km perscorsi: " );
		int km = in.nextInt();
		System.out.println( "Inserisci i litri di carburante consumati: " );
		int l = in.nextInt();
		if (l <= 0) {
			throw new NullException(l);
		}
		int consumi = km/l;
		
		System.out.println( "La tua macchina consuma " + consumi + "L al Km!" );
	}
	
	public void closeScanner() {
		in.close();
	}
	
}
