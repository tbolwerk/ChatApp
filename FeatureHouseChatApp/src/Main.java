/**
 * TODO description
 */



public   class  Main {
	
	
	final static boolean hasAuth = false;

	
	protected static INotifier initNotifier  () {
		INotifier n = new Notifier();
	
		return n;
	}

	
	protected static IChat initGUI  (IColor cs,IEncrypter e) {
		IChat gui = new ChatGUI(cs, e);
		return gui;
	}

	
	
	protected static IAuthenticationInput initAuthenticationInput() {
		IAuthenticationInput ai = new AuthenticationInputStub();
		
		return ai;
	}

	
	protected static IClientAuthenticator initClientAuthenticator() {
		IClientAuthenticator ca = new ClientStubAuthenticator();
		
		return ca;
	}

		
	
	protected static IColor initColor() {
		IColor c = new ColorSelectionStub();
		
		return c;
	}

	
	
	protected static IEncrypter initEncrypter() {
		IEncrypter e = new EncrypterStub();
		
		return e;
	}

	
	
	public static void main(String args[]) {
		IAuthenticationInput ai = initAuthenticationInput();
		IClientAuthenticator ca = initClientAuthenticator();
		// Provide features by adding corresponding interfaces

		IColor cs = initColor();
//		IColor cs = new ColorSelection();
		
//		IEncrypter e = new Encrypter();
		IEncrypter e = initEncrypter();
		
		ILogger l = new LoggerStub();
//		ILogger l = new Logger();
		
		IChat c = initGUI(cs, e);
//		IChat c = new ChatCLI();
		
		INotifier n = initNotifier();

		Client client = new Client(ai, ca, cs, e, l, c, n);
		client.start();
	}


}
