package main.java.client;

import main.java.client.Client;
import main.java.client.component.ColorSelectionStub;
import main.java.client.component.IColor;
import main.java.client.component.Authentication.AuthenticationInputStub;
import main.java.client.component.Authentication.ClientStubAuthenticator;
import main.java.client.component.Authentication.IAuthenticationInput;
import main.java.client.component.Authentication.IClientAuthenticator;

public class Main {
	
	public static void main(String args[]) {
		
		// Provide features by adding corresponding interfaces
		
		IAuthenticationInput ai = new AuthenticationInputStub();
		IClientAuthenticator ca = new ClientStubAuthenticator();
		IColor cs = new ColorSelectionStub();
		IEncrypter e = new EncrypterStub();
		ILogger l = new LoggerStub();
		IChat c = new ChatCLI();
		Client client = new Client(ai, ca, cs, e, l, c);
		client.start();
	}
	
}
