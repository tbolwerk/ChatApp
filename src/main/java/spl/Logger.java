package spl;
import java.io.FileWriter;
import java.io.IOException;

public class Logger {
	
	
	public void log(String text) {
		try {
			FileWriter writer = new FileWriter("log.txt", true);
			writer.write(text + "\n");
			writer.close();
		} catch (IOException e) {
			System.out.println("An error occurred during logging.");
			e.printStackTrace();
		}
	}
}
