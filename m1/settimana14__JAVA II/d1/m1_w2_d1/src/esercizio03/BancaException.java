package esercizio03;

public class BancaException extends Exception {

	public BancaException(String message) {
		super(message);
	}
	
	public String toString() {
		return getMessage();
	}
	
}
