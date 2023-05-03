package m1.w1.d3;

public class esercizio04 {
	/*
	 * -----------------------------------------------------------------------------
	 * Esercizio #4 Scrivere un programma che chiede all'utente di inserire
	 * un numero intero e stampi il conto alla rovescia a partire da quel numero
	 * fino a zero.
	 * 
	 */
	// -----------------------------------------------------------------------------

	public void contoAllaRovescia(int num) {

		System.out.print("Inserisci un numero intero: ");
		for (int i = num; i >= 0; i--) {
			System.out.println(i);
		}
	}
}
