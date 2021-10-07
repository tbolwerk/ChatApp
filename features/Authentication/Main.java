
public class Main {
	
	final static boolean hasAuth = false;
	
	
	protected static IAuthenticationInput initAuthenticationInput() {
		IAuthenticationInput ai = new PasswordInput();
		
		return ai;
	}
	protected static IClientAuthenticator initClientAuthenticator() {
		IClientAuthenticator ca = new ClientPasswordAuthenticator();
		
		return ca;
	}	
}
