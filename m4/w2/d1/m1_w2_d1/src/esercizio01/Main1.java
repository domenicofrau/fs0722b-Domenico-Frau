package esercizio01;

import java.util.Arrays;
import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class Main1 {

	public static void main(String[] args) {

		create();

	}

	public static void create() {

		Scanner in = new Scanner(System.in);
		int position = 0;
		int newValue = 0;
		int[] numbers = new int[5];
		Random numR = new Random();

		for (int i = 0; i < numbers.length; i++) {
			numbers[i] = numR.nextInt(1, 11);
		}

		System.out.println("- Array iniziale: ");
		System.out.println(Arrays.toString(numbers));
		System.out.println("-------------------------------");

		try {
			do {

				System.out.println("- Che numero vuoi aggiunegere?");
				newValue = in.nextInt();
				switch (newValue) {
					case 0:
						in.close();
						break;
				};

				System.out.println("- In che indice lo vuoi inserire?");
				position = in.nextInt();

				if (newValue > 0) {
					for (int i = numbers.length - 1; i > position; i--) {
						numbers[i] = numbers[i];
					}

					numbers[position] = newValue;
					System.out.println("- Nuovo array: " + Arrays.toString(numbers));
					System.out.println("-------------------------------");
				} else {
					System.out.println("Numero troppo basso, devi inserire un numero maggiore di zero!");
					in.close();
				}
			} while (newValue != 0);

		} catch (InputMismatchException e) {
			System.out.println("Hai inserito il valore in un formato non corretto, inserisci un numero valido!");
			in.close();
		} catch (IllegalStateException e) {
			System.out.println("Sei uscito dal programma!");
			in.close();
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println("La posizione scelata per inserire il nuovo numero non esiste!");
			in.close();
		} 

	}

}
