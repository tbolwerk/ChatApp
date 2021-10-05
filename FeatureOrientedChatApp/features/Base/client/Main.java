package Base.client;


import Base.interfaces.*;
import Base.stubs.*;
import GUI.client.ChatGUI;

/**
 * Base application with nothing but stubs.
 */
public class Main {
	protected IAuthenticationInput initAuthenticationInput() {
		IAuthenticationInput ai = new AuthenticationInputStub();
		return ai;
	}
	
	protected IClientAuthenticator initClientAuthenticator() {
		IClientAuthenticator ca = new ClientStubAuthenticator();
		return ca;
	}
	
	protected IColor initColor() {
		IColor cs = new ColorSelectionStub();
		return cs;
	}
	
	protected IEncrypter initEncrypter() {
		IEncrypter e = new EncrypterStub();
		return e;
	}

	protected IChat initChat(IColor c, IEncrypter e){
		return null;
	}
	
	public static void main(String args[]) {
		Main main = new Main();
		IAuthenticationInput ai = main.initAuthenticationInput();
		IClientAuthenticator ca = main.initClientAuthenticator();
		IColor cs = main.initColor();
		IEncrypter e = main.initEncrypter();
		ILogger l = new LoggerStub();
		IChat c = main.initChat(cs,e);

		Client client = new Client(ai, ca, cs, e, l, c);
		client.start();
	}
}