package app;

import models.CentroControllo;
import models.Comunicazione;
import models.ControlloSonda;
import models.Sonda;

public class SistemaRilevamento {

	public static void main(String[] args) {
		
		
		Comunicazione c = new Comunicazione();
		
		CentroControllo cc = new CentroControllo(c);
		
		ControlloSonda cs = new ControlloSonda(1, cc);
		
		Sonda s = new Sonda(1, 12.0896, 4.87997);
		
		
		// L'osservatore della sonda e` il controllo sonda cs	
		
		s.addObserver(cs);
		
		// DEVE RILEVARE ALLARME PERCHE > 5	
		
		s.setSmokeLevel(6);
		
		// NON DEVE RILEVARE ALLARME PERCHE < 5 		
		
		s.setSmokeLevel(3);

	}

}
