package models;

public class Comunicazione {
	public void allarme(int id, double d, double e, int smokeLevel) {
		System.out.println("E' stato rilevato un incendio dalla sonda " + id + " " +
	    "nel luogo con le seguenti coordinate " + d + e + " " + " e livello di fumo " + smokeLevel );
		
		System.out.println("http://host/alarm?=idsonda=" + id + "&lat=[" + d + "]&lon=["+ e +"]&smokelevel=["+ smokeLevel +"]");
	}
}
