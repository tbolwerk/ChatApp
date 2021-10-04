package main.java.client;

import main.java.client.Client;
import main.java.client.component.ColorSelection;
import main.java.client.component.ColorSelectionStub;
import main.java.client.component.IColor;
import main.java.client.component.Authentication.AuthenticationInputStub;
import main.java.client.component.Authentication.ClientPasswordAuthenticator;
import main.java.client.component.Authentication.ClientStubAuthenticator;
import main.java.client.component.Authentication.IAuthenticationInput;
import main.java.client.component.Authentication.IClientAuthenticator;
import main.java.client.component.Authentication.PasswordInput;
import main.java.spl.Logger;

public class Main {
	
	final static boolean hasAuth = false;
	
	public static void main(String args[]) {
		IAuthenticationInput ai = new AuthenticationInputStub();
		IClientAuthenticator ca = new ClientStubAuthenticator();
		// Provide features by adding corresponding interfaces
		if(hasAuth) {
			  ai = new PasswordInput();
			  ca = new ClientPasswordAuthenticator(); 
		}
	
//		IColor cs = new ColorSelectionStub();
		IColor cs = new ColorSelection();
		
//		IEncrypter e = new Encrypter();
		IEncrypter e = new EncrypterStub();
		
//		ILogger l = new LoggerStub();
		ILogger l = new Logger();
		
		IChat c = new ChatGUI(cs, e);
//		IChat c = new ChatCLI();

		Client client = new Client(ai, ca, cs, e, l, c);
		client.start();
	}
	
}
