package main.java.client.component.Authentication;

import java.io.DataOutputStream;
import java.io.IOException;

public class ServerStubAuthenticator implements IServerAuthenticator {

	@Override
	public boolean shouldAuthenticate(String message) {
		return false;
	}

	@Override
	public boolean authenticate(String proof, DataOutputStream out) throws IOException {
		return true;
	}

}
