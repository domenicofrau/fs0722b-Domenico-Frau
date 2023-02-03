package p1;

public class Immagine extends MediaPlayer implements Luminosita{

	private int luminosita;

	public Immagine(String title, int luminosita) {
		super(title);
		this.luminosita = luminosita;
	}

	@Override
	public int aumentaLuminosita() {
		return ++luminosita;
	}

	@Override
	public int diminuisciLuminosita() {
		return --luminosita;
	}

	@Override
	public int getLuminosita() {
		return luminosita;
	}

	@Override
	public void show() {
		System.out.printf("Titolo: " + this.getTitle() + " Luminosità: ");
		for (int i = 1; i <= this.getLuminosita(); i++) {
			System.out.printf("*");
		}
	}
}
