package main.java.client.component.Authentication;

import java.io.DataOutputStream;
import java.io.IOException;

public interface IServerAuthenticator {
	public boolean shouldAuthenticate(String message);
	public void authenticate(String proof, DataOutputStream out) throws IOException;
}
