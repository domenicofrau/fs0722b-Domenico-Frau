package e4;

public enum Livello {
	OPERAIO(1.0), 
	IMPIEGATO(1.2), 
	QUADRO(1.5), 
	DIRIGENTE(2);

	double moltiplicatoreStipendio;

	Livello(double moltiplicatoreStipendio) {
		this.moltiplicatoreStipendio = moltiplicatoreStipendio;
	}

	double getMoltiplicatoreStipendio() {
		return moltiplicatoreStipendio;
	}

}
