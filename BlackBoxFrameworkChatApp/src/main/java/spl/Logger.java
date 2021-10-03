package main.java.spl;

import java.io.FileWriter;
import java.io.IOException;

import main.java.client.ILogger;

public class Logger implements ILogger {

	public void log(String filename, String text) {
		try {
			FileWriter writer = new FileWriter(filename, true);
			writer.write(text + "\n");
			writer.close();
		} catch (IOException e) {
			System.out.println("An error occurred during logging.");
			e.printStackTrace();
		}
	}
}
