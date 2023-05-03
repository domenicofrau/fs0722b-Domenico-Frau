package p1;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		MediaPlayer file1 = null;
		MediaPlayer file2 = null;
		MediaPlayer file3 = null;
		MediaPlayer file4 = null;
		MediaPlayer file5 = null;

		try (Scanner scanner = new Scanner(System.in)) {
			int tipo;
			
			//		  __ _ _        __ 
			//		 / _(_) |      /_ |
			//		| |_ _| | ___   | |
			//		|  _| | |/ _ \  | |
			//		| | | | |  __/  | |
			//		|_| |_|_|\___|  |_|
			
			do {
			System.out.println("Selezionare il tipo di file che si vuole aggiungere (1/5):");
			System.out.println("");
			System.out.println("(1) - Immagine");
			System.out.println("(2) - Video");
			System.out.println("(3) - Audio");
			System.out.println("");
			tipo = scanner.nextInt();
			
			switch (tipo) {      

			// ----------------------------------------------------------------------------------- IMMAGINE 
			case 1:
				Scanner scannerImg01 = new Scanner(System.in);
				System.out.println("");
				System.out.println("Inserire il titolo che si vuole assegnare all'immagine:");
				String titoloImg01 = scannerImg01.nextLine();
				System.out.println("Impostare la luminosità dell'immagine:");
				int luminositaImg01 = scannerImg01.nextInt();
				System.out.println("** File aggiunto correttamente! **");

				file1 = new Immagine(titoloImg01, luminositaImg01);
				file1.eUn_Immagine = 1;
				break;

			// ----------------------------------------------------------------------------------- VIDEO
			case 2:
				Scanner scannerVid01 = new Scanner(System.in);
				System.out.println("");
				System.out.println("Inserire il titolo che si vuole assegnare al video:");
				String titoloVid01 = scannerVid01.nextLine();
				System.out.println("Impostare la durata del video:");
				int durataVid01 = scannerVid01.nextInt();
				System.out.println("Impostare la luminosità del video:");
				int luminositaVid01 = scannerVid01.nextInt();
				System.out.println("Impostare il volume del video:");
				int volumeVid01 = scannerVid01.nextInt();
				System.out.println("** File aggiunto correttamente! **");

				file1 = new Video(titoloVid01, durataVid01, luminositaVid01, volumeVid01);
				file1.eUn_Immagine = 0;
				break;

			// ----------------------------------------------------------------------------------- AUDIO
			case 3:
				Scanner scannerAud01 = new Scanner(System.in);
				System.out.println("");
				System.out.println("Inserire il titolo che si vuole assegnare alla traccia audio:");
				String titoloAud01 = scannerAud01.nextLine();
				System.out.println("Impostare la durata della traccia audio:");
				int durataAud01 = scannerAud01.nextInt();
				System.out.println("Impostare il volume della traccia:");
				int volumeAud01 = scannerAud01.nextInt();
				System.out.println("** File aggiunto correttamente! **");

				file1 = new Audio(titoloAud01, durataAud01, volumeAud01);
				file1.eUn_Immagine = 0;
				break;
			
			// ----------------------------------------------------------------------------------- ERRORE
			default:
				System.out.println("Errore: inserire un numero compreso tra 1 e 3.");
				System.out.println("");
			}
			}while (tipo != 1 && tipo != 2 && tipo != 3);
			

			//		  __ _ _        ___  
			//		 / _(_) |      |__ \ 
			//		| |_ _| | ___     ) |
			//		|  _| | |/ _ \   / / 
			//		| | | | |  __/  / /_ 
			//		|_| |_|_|\___| |____|
			
			do {
			System.out.println("");
			System.out.println("");
			System.out.println("Selezionare il tipo di file che si vuole aggiungere (2/5):");
			System.out.println("");
			System.out.println("(1) - Immagine");
			System.out.println("(2) - Video");
			System.out.println("(3) - Audio");
			System.out.println("");
			tipo = scanner.nextInt();

			switch (tipo) {
			
			// ----------------------------------------------------------------------------------- IMMAGINE 
			case 1:
				Scanner scannerImg02 = new Scanner(System.in);
				System.out.println("");
				System.out.println("Inserire il titolo che si vuole assegnare all'immagine:");
				String titoloImg02 = scannerImg02.nextLine();
				System.out.println("Impostare la luminosità dell'immagine:");
				int luminositaImg02 = scannerImg02.nextInt();
				System.out.println("** File aggiunto correttamente! **");

				file2 = new Immagine(titoloImg02, luminositaImg02);
				file2.eUn_Immagine = 1;
				break;

			// ----------------------------------------------------------------------------------- VIDEO
			case 2:
				Scanner scannerVid02 = new Scanner(System.in);
				System.out.println("");
				System.out.println("Inserire il titolo che si vuole assegnare al video:");
				String titoloVid02 = scannerVid02.nextLine();
				System.out.println("Impostare la durata del video:");
				int durataVid02 = scannerVid02.nextInt();
				System.out.println("Impostare la luminosità del video:");
				int luminositaVid02 = scannerVid02.nextInt();
				System.out.println("Impostare il volume del video:");
				int volumeVid02 = scannerVid02.nextInt();
				System.out.println("** File aggiunto correttamente! **");

				file2 = new Video(titoloVid02, durataVid02, luminositaVid02, volumeVid02);
				file2.eUn_Immagine = 0;
				break;

			// ----------------------------------------------------------------------------------- AUDIO
			case 3:
				Scanner scannerAud02 = new Scanner(System.in);
				System.out.println("");
				System.out.println("Inserire il titolo che si vuole assegnare alla traccia audio:");
				String titoloAud02 = scannerAud02.nextLine();
				System.out.println("Impostare la durata della traccia audio:");
				int durataAud02 = scannerAud02.nextInt();
				System.out.println("Impostare il volume della traccia:");
				int volumeAud02 = scannerAud02.nextInt();
				System.out.println("** File aggiunto correttamente! **");

				file2 = new Audio(titoloAud02, durataAud02, volumeAud02);
				file2.eUn_Immagine = 0;
				break;
				
			// ----------------------------------------------------------------------------------- ERRORE	
			default:
				System.out.println("Errore: inserire un numero compreso tra 1 e 3.");
				System.out.println("");
			}
			} while (tipo != 1 && tipo != 2 && tipo != 3);

			
				//		  __ _ _        ____  
				//		 / _(_) |      |___ \ 
				//		| |_ _| | ___    __) |
				//		|  _| | |/ _ \  |__ < 
				//		| | | | |  __/  ___) |
			  	//		|_| |_|_|\___| |____/ 
				
				do {
				System.out.println("");
				System.out.println("");
				System.out.println("Selezionare il tipo di file che si vuole aggiungere (3/5):");
				System.out.println("");
				System.out.println("(1) - Immagine");
				System.out.println("(2) - Video");
				System.out.println("(3) - Audio");
				System.out.println("");
				tipo = scanner.nextInt();

				switch (tipo) {
				
				// ----------------------------------------------------------------------------------- IMMAGINE 
				case 1:
					Scanner scannerImg03 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare all'immagine:");
					String titoloImg03 = scannerImg03.nextLine();
					System.out.println("Impostare la luminosità dell'immagine:");
					int luminositaImg03 = scannerImg03.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file3 = new Immagine(titoloImg03, luminositaImg03);
					file3.eUn_Immagine = 1;
					break;

				// ----------------------------------------------------------------------------------- VIDEO
				case 2:
					Scanner scannerVid03 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare al video:");
					String titoloVid03 = scannerVid03.nextLine();
					System.out.println("Impostare la durata del video:");
					int durataVid03 = scannerVid03.nextInt();
					System.out.println("Impostare la luminosità del video:");
					int luminositaVid03 = scannerVid03.nextInt();
					System.out.println("Impostare il volume del video:");
					int volumeVid03 = scannerVid03.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file3 = new Video(titoloVid03, durataVid03, luminositaVid03, volumeVid03);
					file3.eUn_Immagine = 0;
					break;

				// ----------------------------------------------------------------------------------- AUDIO
				case 3:
					Scanner scannerAud03 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare alla traccia audio:");
					String titoloAud03 = scannerAud03.nextLine();
					System.out.println("Impostare la durata della traccia audio:");
					int durataAud03 = scannerAud03.nextInt();
					System.out.println("Impostare il volume della traccia:");
					int volumeAud03 = scannerAud03.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file3 = new Audio(titoloAud03, durataAud03, volumeAud03);
					file3.eUn_Immagine = 0;
					break;
				
				// ----------------------------------------------------------------------------------- ERRORE	
				default:
					System.out.println("Errore: inserire un numero compreso tra 1 e 3.");
					System.out.println("");
				}
				} while (tipo != 1 && tipo != 2 && tipo != 3);

				
				//		  __ _ _        _  _   
				//		 / _(_) |      | || |  
				//		| |_ _| | ___  | || |_ 
				//		|  _| | |/ _ \ |__   _|
				//		| | | | |  __/    | |  
				//		|_| |_|_|\___|    |_|  
				
				do {
				System.out.println("");
				System.out.println("");
				System.out.println("Selezionare il tipo di file che si vuole aggiungere (4/5):");
				System.out.println("");
				System.out.println("(1) - Immagine");
				System.out.println("(2) - Video");
				System.out.println("(3) - Audio");
				System.out.println("");
				tipo = scanner.nextInt();

				switch (tipo) {
				
				// ----------------------------------------------------------------------------------- IMMAGINE 
				case 1:
					Scanner scannerImg04 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare all'immagine:");
					String titoloImg04 = scannerImg04.nextLine();
					System.out.println("Impostare la luminosità dell'immagine:");
					int luminositaImg04 = scannerImg04.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file4 = new Immagine(titoloImg04, luminositaImg04);
					file4.eUn_Immagine = 1;
					break;

				// ----------------------------------------------------------------------------------- VIDEO
				case 2:
					Scanner scannerVid04 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare al video:");
					String titoloVid04 = scannerVid04.nextLine();
					System.out.println("Impostare la durata del video:");
					int durataVid04 = scannerVid04.nextInt();
					System.out.println("Impostare la luminosità del video:");
					int luminositaVid04 = scannerVid04.nextInt();
					System.out.println("Impostare il volume del video:");
					int volumeVid04 = scannerVid04.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file4 = new Video(titoloVid04, durataVid04, luminositaVid04, volumeVid04);
					file4.eUn_Immagine = 0;
					break;

				// ----------------------------------------------------------------------------------- AUDIO
				case 3:
					Scanner scannerAud04 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare alla traccia audio:");
					String titoloAud04 = scannerAud04.nextLine();
					System.out.println("Impostare la durata della traccia audio:");
					int durataAud04 = scannerAud04.nextInt();
					System.out.println("Impostare il volume della traccia:");
					int volumeAud04 = scannerAud04.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file4 = new Audio(titoloAud04, durataAud04, volumeAud04);
					file4.eUn_Immagine = 0;
					break;
					
				// ----------------------------------------------------------------------------------- ERRORE	
				default:
					System.out.println("Errore: inserire un numero compreso tra 1 e 3.");
					System.out.println("");
				}
				} while (tipo != 1 && tipo != 2 && tipo != 3);

				//		  __ _ _        _____ 
				//		 / _(_) |      | ____|
				//		| |_ _| | ___  | |__  
				//		|  _| | |/ _ \ |___ \ 
				//		| | | | |  __/  ___) |
				//		|_| |_|_|\___| |____/  
				
				do {
				System.out.println("");
				System.out.println("");
				System.out.println("Selezionare il tipo di file che si vuole aggiungere (5/5):");
				System.out.println("");
				System.out.println("(1) - Immagine");
				System.out.println("(2) - Video");
				System.out.println("(3) - Audio");
				System.out.println("");
				tipo = scanner.nextInt();

				switch (tipo) {
				
				// ----------------------------------------------------------------------------------- IMMAGINE 
				case 1:
					Scanner scannerImg05 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare all'immagine:");
					String titoloImg05 = scannerImg05.nextLine();
					System.out.println("Impostare la luminosità dell'immagine:");
					int luminositaImg05 = scannerImg05.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file5 = new Immagine(titoloImg05, luminositaImg05);
					file5.eUn_Immagine = 1;
					break;

				// ----------------------------------------------------------------------------------- VIDEO
				case 2:
					Scanner scannerVid05 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare al video:");
					String titoloVid05 = scannerVid05.nextLine();
					System.out.println("Impostare la durata del video:");
					int durataVid05 = scannerVid05.nextInt();
					System.out.println("Impostare la luminosità del video:");
					int luminositaVid05 = scannerVid05.nextInt();
					System.out.println("Impostare il volume del video:");
					int volumeVid05 = scannerVid05.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file5 = new Video(titoloVid05, durataVid05, luminositaVid05, volumeVid05);
					file5.eUn_Immagine = 0;
					break;

				// ----------------------------------------------------------------------------------- AUDIO
				case 3:
					Scanner scannerAud05 = new Scanner(System.in);
					System.out.println("");
					System.out.println("Inserire il titolo che si vuole assegnare alla traccia audio:");
					String titoloAud05 = scannerAud05.nextLine();
					System.out.println("Impostare la durata della traccia audio:");
					int durataAud05 = scannerAud05.nextInt();
					System.out.println("Impostare il volume della traccia:");
					int volumeAud05 = scannerAud05.nextInt();
					System.out.println("** File aggiunto correttamente! **");

					file5 = new Audio(titoloAud05, durataAud05, volumeAud05);
					file5.eUn_Immagine = 0;
					break;
				
				// ----------------------------------------------------------------------------------- ERRORE
				default:
					System.out.println("Errore: inserire un numero compreso tra 1 e 3.");
					System.out.println("");
				}
				} while (tipo != 1 && tipo != 2 && tipo != 3);

	
		  	//      	   _                       
		  	//			  | |                      
		  	// 		 _ __ | | __ _ _   _  ___ _ __ 
		  	//		| '_ \| |/ _` | | | |/ _ \ '__|
		  	//		| |_) | | (_| | |_| |  __/ |   
		  	//		| .__/|_|\__,_|\__, |\___|_|   
		  	//		| |             __/ |          
		  	//		|_|            |___/         
				
			int scelta;
			do {
				System.out.println();
				System.out.println("Inserire il numero del file da riprodurre (1-5):");
				scelta = scanner.nextInt();
				switch (scelta) {
				case 1:
					switch (file1.eUn_Immagine) {
					case 1:
						file1.show();
						break;
					case 0:
						file1.play();
						break;
					}
					break;
				case 2:
					switch (file2.eUn_Immagine) {
					case 1:
						file2.show();
						break;
					case 0:
						file2.play();
						break;
					}
					break;
				case 3:
					switch (file3.eUn_Immagine) {
					case 1:
						file3.show();
						break;
					case 0:
						file3.play();
						break;
					}
					break;
				case 4:
					switch (file4.eUn_Immagine) {
					case 1:
						file4.show();
						break;
					case 0:
						file4.play();
						break;
					}
					break;
				case 5:
					switch (file5.eUn_Immagine) {
					case 1:
						file5.show();
						break;
					case 0:
						file5.play();
						break;
					}
					break;
				
				case 0:
					System.out.println("FINE");
					break;
				
				default:
					System.out.println("Questo file non esiste! Scegliere un file da 1 a 5");
					scelta = scanner.nextInt();
				}
			} while (scelta != 0 && scelta <= 5);
		}
	}
}