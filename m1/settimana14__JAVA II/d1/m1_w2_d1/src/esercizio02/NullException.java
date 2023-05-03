package esercizio02;

public class NullException extends Exception {

	public NullException(int l) {
		System.out.println( "Il numero di litri inserito " + l + " non è valido!" );
	}
	
}
