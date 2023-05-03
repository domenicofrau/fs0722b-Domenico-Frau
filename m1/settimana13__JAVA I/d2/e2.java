package w13.d2;

public class e2 {
	public static void main(String[] args) {
		//ESERCIZIO 01
		//--------------------------------------------------------------------
		Rettangolo 	Rett01 = new Rettangolo(34,5);
		Rettangolo	Rett02 = new Rettangolo(67,3);
		stampaRettangolo(Rett01);
		stampaDueRettangoli(Rett01, Rett02);
		
		//ESERCIZIO 02
		//--------------------------------------------------------------------
		Sim S = new Sim(3401111112L);
		S.stampaDettaglioSim();
		
		//ESERCIZIO 03
		//--------------------------------------------------------------------
		Cliente C = new Cliente(345, "Mario Rossi", "cliente@cliente.it", "11/10/1990");
		Articolo Articolo1 = new Articolo(6666, "brutto", 20, 2);
		Articolo Articolo2 = new Articolo(6666, "brutto", 20, 2);
		
		Articolo Arr[] = {Articolo1,Articolo2};
		
		Carrello Cart = new Carrello(C, Arr);
		System.out.println("Il totale del carrello è: " + Cart.totaleCostoArticoli);
		
	}
	
	public static void stampaRettangolo(Rettangolo a) {
		System.out.println("Il perimetro del primo rettangolo è: " + a.perimetroRettangolo());
		System.out.println("L'area del primo rettangolo è: " + a.areaRettangolo());
		System.out.println("--------------------------------------------------");
	}
	
	public static void stampaDueRettangoli(Rettangolo a, Rettangolo b) {
		System.out.println(a.perimetroRettangolo());
		System.out.println(a.areaRettangolo());
		System.out.println(b.perimetroRettangolo());
		System.out.println(b.areaRettangolo());
		System.out.println(a.perimetroRettangolo()+ b.perimetroRettangolo());
		System.out.println(a.areaRettangolo() + b.areaRettangolo());
	}
}
