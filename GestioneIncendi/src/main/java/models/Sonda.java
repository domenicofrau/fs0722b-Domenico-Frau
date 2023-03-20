package models;

public class Sonda extends Subject{
	private final int limite = 5;
	
	private int id;
	private double lon;
	private double lat;
	private int smokeLevel = 0;
	
	public Sonda(int id, double lat, double lon) {
		
		this.id = id;
		this.lon = lon;
		this.lat = lat;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getLon() {
		return lon;
	}

	public void setLon(int lon) {
		this.lon = lon;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(int lat) {
		this.lat = lat;
	}

	public int getSmokeLevel() {
		return smokeLevel;
	}

	public void setSmokeLevel(int smokeLevel) {
		this.smokeLevel = smokeLevel;
		
		if(smokeLevel > limite ) {
			super.notifyObservable();
		}
	}
	
	
	
	
	
	
	
	
}
