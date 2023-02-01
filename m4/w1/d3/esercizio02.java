package m1.w1.d3;

public class esercizio02 {
	/*-----------------------------------------------------------------------------------
	 * Esercizio #2
	 * Scrivere un programma che chiede un intero in ingresso e lo stampa in lettere
	 * se il valore è compreso tra 0 e 3, altrimenti stampa un messaggio d'errore
	 * usando il costrutto switch.
	 * 
	 */
	// -----------------------------------------------------------------------------------

	public void stampaStringa(int num) {
		System.out.println("Inserisci un numero intero compreso tra 0 e 3: ");

		switch (num) {
		case 0:
			System.out.println("zero");
			break;
		case 1:
			System.out.println("uno");
			break;
		case 2:
			System.out.println("due");
			break;
		case 3:
			System.out.println("tre");
			break;
		default:
			System.out.println("Errore: il valore inserito non è compreso tra 0 e 3");
		}

	}
}
