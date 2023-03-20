package Test;
import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;

import models.CentroControllo;
import models.ControlloSonda;
import models.Sonda;

public class TestIncendio {

	CentroControllo centroControllo;

	@Test
	public void creaControlloSonda() {
		ControlloSonda cs = new ControlloSonda(1, centroControllo);
		
		Sonda s = new Sonda(1, 4.99098, 13.848290);
		
		s.addObserver(cs);
		
		assertTrue(s.getObservers().contains(cs));
	}
	
	@Test
    public void FumoSuperaSoglia() {
        
        ControlloSonda cts1 = new ControlloSonda(1, centroControllo);

        Sonda s = new Sonda(1, 44.424829,  8.932020);

        s.addObserver(cts1);
        
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                s.setSmokeLevel(7);
            }
        };
        assertThrows(Exception.class, runnable::run);
    }
	
	@Test
	public void FumoSottoSoglia() {
	    
	    ControlloSonda cts1 = new ControlloSonda(1, centroControllo);
	    Sonda s = new Sonda(1, 44.424829,  8.932020);
	    s.addObserver(cts1);
	    
	    try {
	        s.setSmokeLevel(3);
	    } catch (Exception e) {
	        Assert.fail("Unexpected exception thrown: " + e);
	    }
	}
	
}
