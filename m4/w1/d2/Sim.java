package w13.d2;

import java.util.Arrays;

public class Sim {

	long numeroTelefono;
	double creditoDisponibile = 0;
	Chiamata ultimeChiamate[] = new Chiamata[5];
	
	public Sim(long nT) {
		this.numeroTelefono = nT;
	}
	
	public void stampaDettaglioSim() {
		System.out.println("Il numero di telefono è: " + this.numeroTelefono + " - Il credito disponibile è: " + this.creditoDisponibile + " - Ultime chiamate: " + Arrays.toString(this.ultimeChiamate));
	}
}
