import java.io.BufferedReader;
import java.io.PrintWriter;

public class ClientStubAuthenticator implements IClientAuthenticator {

	@Override
	public boolean authenticate(PrintWriter out, BufferedReader in, String password) {
		return true;
	}

}
