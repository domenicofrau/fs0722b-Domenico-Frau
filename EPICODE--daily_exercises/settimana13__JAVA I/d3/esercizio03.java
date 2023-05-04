package m1.w1.d3;

import java.util.Scanner;

public class esercizio03 {
	/*
	 * -----------------------------------------------------------------------------
	 * Esercizio #3 Scrivere un programma che chiede di inserire una stringa
	 * e la suddivida in caratteri separati dalla virgola. Il programma si ripete
	 * fino a che l'utente non inserisce la stringa ":q"
	 * 
	 */
	// -----------------------------------------------------------------------------

	public void suddividiStringa() {
		try (Scanner scanner = new Scanner(System.in)) {
			while (true) {
				System.out.print("Inserisci una stringa (:q per uscire): ");
				String input = scanner.nextLine();
				if (input.equals(":q")) {
					break;
				}
				String[] caratteri = input.split("");
				System.out.print("Caratteri separati dalla virgola: ");
				for (int i = 0; i < caratteri.length; i++) {
					System.out.print(caratteri[i]);
					if (i < caratteri.length - 1) {
						System.out.print(", ");
					}
				}
				System.out.println();
			}
		}
	}
}
