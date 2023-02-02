package e4;

public class GestioneDipendenti {

	public static void main(String[] args) {
		Dipendente d1 = new Dipendente("1234", Dipartimento.PRODUZIONE);
		Dipendente d2 = new Dipendente("1234", Dipartimento.PRODUZIONE);
		Dipendente d3 = new Dipendente("1234", Dipartimento.AMMINISTRAZIONE);

		d3.promuovi();

		Dipendente d4 = new Dipendente("1234", Dipartimento.VENDITE);

		d4.promuovi();
		d4.promuovi();
		d4.promuovi();

		d1.stampaDatiDipendente();
		System.out.println("------------");
		d2.stampaDatiDipendente();
		System.out.println("------------");
		d3.stampaDatiDipendente();
		System.out.println("------------");
		d4.stampaDatiDipendente();
		System.out.println("------------");
		
		
		d2.promuovi();
		d3.promuovi();

		
		d2.stampaDatiDipendente();
		System.out.println("------------");
		d3.stampaDatiDipendente();
		System.out.println("------------");

		System.out.println("totale Stipendi: " + (d1.getStipendio() + Dipendente.calcolaPagaStraordinario(d1, 5)
				+ d2.getStipendio() + Dipendente.calcolaPagaStraordinario(d2, 5) + d3.getStipendio()
				+ Dipendente.calcolaPagaStraordinario(d3, 5) + d4.getStipendio()
				+ Dipendente.calcolaPagaStraordinario(d4, 5))+" €");

	}

}
