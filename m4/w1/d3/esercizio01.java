package m1.w1.d3;

public class esercizio01 {
	/*-----------------------------------------------------------------------------------
	 * Esercizio #1
	 * Scrivere le seguenti funzioni: 
	 * - stringaPariDispari, che accetta una stringa e ritorna true se il numero di
	 * 		caratteri è pari e false se il numero di caratteri è dispari. 
	 * - annoBisestile, che accetta un anno espresso come intero e ritorna true se
	 * 		esso è bisestile, false altrimenti. 
	 * 		[Un anno per essere bisestile deve rispettare una delle seguenti regole: 
	 * 		- essere divisibile per 4 
	 * 		- qualora sia divisibile per 100 deve essere anche divisibile per 400] 
	 * Scrivere una main che utilizzi le funzioni.
	 * 
	 */
	// -----------------------------------------------------------------------------------

	public boolean stringaPariDispari(String parola) {
		int lunghezza = parola.length();
		return lunghezza % 2 == 0;
	}

	public boolean annoBisestile(int anno) {
		if (anno % 400 == 0) {
			return true;
		} else if (anno % 100 == 0) {
			return false;
		} else if (anno % 4 == 0) {
			return true;
		} else {
			return false;
		}
	}

}
