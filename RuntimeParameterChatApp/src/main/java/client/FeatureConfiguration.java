package client;

public class FeatureConfiguration {
	public boolean color;
	public boolean encryption;
	public boolean authentication;
	public boolean logging;

	public FeatureConfiguration() {
		getConfiguration();
	}

	private void getConfiguration() {
		// TODO: Get from config file
		color = false;
		encryption = false;
		authentication = false;
		logging = false;
	}
}
