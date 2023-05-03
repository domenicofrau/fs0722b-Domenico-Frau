package p1;

public class Audio extends MediaPlayer implements Volume {

	private int volume;
	private int time;

	public Audio(String title, int time, int volume) {
		super(title);
		this.volume = volume;
		this.time = time;

	}

	@Override
	public int getVolume() {

		if (this.volume < 0) {
			this.volume = 0;
		}
		return this.volume;
	}

	public int getTime() {

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
	public void play() {
		if (getTime() > 0) {
			for (int i = 1; i <= this.getTime(); i++) {
				System.out.printf("Titolo: " + this.getTitle() + " Minuti: " + (i));
				System.out.printf(" Volume: ");

				for (int j = 0; j < this.getVolume(); j++) {
					System.out.printf("!");
				}
				System.out.println();
			}
		} else
			System.out.println("Errore: la durata deve avere un valore positivo");
	}
}
