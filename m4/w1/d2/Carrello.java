package w13.d2;

public class Carrello {

	Cliente clienteAssociato;
	Articolo elencoArticoli[];
	double totaleCostoArticoli=0;

	public Carrello(Cliente cA, Articolo eA[]) {
		this.clienteAssociato = cA;
		this.elencoArticoli = eA;
		for (int i = 0; i < eA.length; i++) {
			this.totaleCostoArticoli += eA[i].prezzo;
		}

	}

}
