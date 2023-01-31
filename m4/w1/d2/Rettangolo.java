package w13.d2;

public class Rettangolo {

	double base;
	double altezza;

	// COSTRUTTORE ->
	
	public Rettangolo(double a, double b) {
		this.base = a;
		this.altezza = b;
	}

	
	// METODI ->
	
	public double perimetroRettangolo() {
		return (this.altezza + this.base) * 2;
	}
	
	public double areaRettangolo() {
		return (this.altezza * this.base);
	}
}
