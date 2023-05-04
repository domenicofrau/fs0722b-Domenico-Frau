package w13.d2;

public class Articolo {

	int codiceArticolo;
	String descrizioneArticolo;
	double prezzo;
	int numeroPezzi;

	public Articolo(int codArt, String desArt, double pre, int numPez) {
		this.codiceArticolo = codArt;
		this.descrizioneArticolo = desArt;
		this.prezzo = pre;
		this.numeroPezzi = numPez;
	}

}
