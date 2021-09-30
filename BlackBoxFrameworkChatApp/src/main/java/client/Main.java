package main.java.client;

import main.java.client.Client;
import main.java.client.component.ColorSelectionStub;
import main.java.client.component.IColor;
import main.java.client.component.Authentication.AuthenticationInputStub;
import main.java.client.component.Authentication.ClientPasswordAuthenticator;
import main.java.client.component.Authentication.ClientStubAuthenticator;
import main.java.client.component.Authentication.IAuthenticationInput;
import main.java.client.component.Authentication.IClientAuthenticator;
import main.java.client.component.Authentication.PasswordInput;

public class Main {
	
	public static void main(String args[]) {
		
		// Provide features by adding corresponding interfaces
		
		IAuthenticationInput ai = new PasswordInput();
		IClientAuthenticator ca = new ClientStubAuthenticator(); // new ClientPasswordAuthenticator(); 
		IColor cs = new ColorSelectionStub();
		IEncrypter e = new Encrypter(); // new EncrypterStub(); 
		ILogger l = new LoggerStub();
		
		IChat gc = new ChatGUI(e);
		IChat c = new ChatCLI();
		Client client = new Client(ai, ca, cs, e, l, gc);
		client.start();
	}
	
}
