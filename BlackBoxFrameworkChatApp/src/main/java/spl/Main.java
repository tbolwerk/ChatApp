package main.java.spl;
import main.java.client.ILogger;
import main.java.client.component.Authentication.IServerAuthenticator;
import main.java.client.component.Authentication.ServerPasswordAuthenticator;
import main.java.client.component.Authentication.ServerStubAuthenticator;
import main.java.spl.Server;

public class Main {
	public static void main(String args[]) {
		IServerAuthenticator auth = new ServerStubAuthenticator(); // new ServerPasswordAuthenticator();
		ILogger log = new Logger();
		
		Server server = new Server(auth, log);
		server.start();
	}
}
