package client;

import io.github.cdimascio.dotenv.Dotenv;

public class FeatureConfiguration {
	public boolean color;
	public boolean encryption;
	public boolean authentication;
	public boolean logging;

	public FeatureConfiguration() {
		getConfiguration();
	}

	private void getConfiguration() {
		try {
			Dotenv dotenv = Dotenv.load();
			color = Boolean.parseBoolean(dotenv.get("COLOR"));
			encryption = Boolean.parseBoolean(dotenv.get("ENCRYPTION"));
			authentication = Boolean.parseBoolean(dotenv.get("AUTHENTICATION"));
			logging = Boolean.parseBoolean(dotenv.get("LOGGING"));
		} catch (Exception e) {
			System.out.println("Error: Something went wrong with the .env file. All features are turned of by default");
			color = false;
			encryption = false;
			authentication = false;
			logging = false;
		}
	}
}
