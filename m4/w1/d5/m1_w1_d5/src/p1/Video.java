package p1;

public class Video extends MediaPlayer implements Volume, Luminosita {
	private int volume;
	private int time;
	private int luminosita;

	public Video(String title, int time, int volume, int luminosita) {
		super(title);
		this.luminosita = luminosita;
		this.volume = volume;
		this.time = time;
	}

	@Override
	public int getVolume() {
		if (volume < 0) {
			this.volume = 0;
		}
		return volume;
	}

	@Override
	public int getLuminosita() {

		if (luminosita < 0) {
			luminosita = 0;
		}

		return luminosita;
	}

	public int getDurata() {

		if (time < 0) {
			System.out.println("Errore: la durata deve avere un valore positivo");
		}
		return time;
	}

	@Override
	public int alzaVolume() {

		return ++volume;
	}

	@Override
	public int abbassaVolume() {

		return --volume;
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
	public void play() {
		if (getDurata() > 0) {
			for (int i = 1; i <= this.getDurata(); i++) {
				System.out.printf("Titolo: " + this.getTitle() + " Minuti: " + (i));
				System.out.printf(" Volume: ");
				for (int j = 0; j < this.getVolume(); j++) {
					System.out.printf("!");
				}
				System.out.printf(" Luminosità: ");
				for (int c = 0; c < this.getLuminosita(); c++) {
					System.out.printf("*");
				}
				System.out.println();
			}
		} else 
			System.out.println("Errore: la durata deve avere un valore positivo");
	}
}
