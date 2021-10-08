/**
 * TODO description
 */
public   class  Main {
	
	
	final static boolean hasAuth  = false;

	
	protected static IChat initGUI  (IColor cs,IEncrypter e) {
		IChat gui = new ChatGUI(cs, e);
		return gui;
	}

	
	
	
	protected static IAuthenticationInput initAuthenticationInput  () {
		IAuthenticationInput ai = new PasswordInput();
		
		return ai;
	}

	
	protected static IClientAuthenticator initClientAuthenticator  () {
		IClientAuthenticator ca = new ClientPasswordAuthenticator();
		
		return ca;
	}

	
	protected static IColor initColor  () {
		IColor c = new ColorSelection();
		
		return c;
	}

	
	protected static IEncrypter initEncrypter  () {
		IEncrypter e = new Encrypter();
		
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

		Client client = new Client(ai, ca, cs, e, l, c);
		client.start();
	}


}
