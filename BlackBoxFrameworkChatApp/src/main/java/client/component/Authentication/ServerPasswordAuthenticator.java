package main.java.client.component.Authentication;

import java.io.DataOutputStream;
import java.io.IOException;

public class ServerPasswordAuthenticator implements IServerAuthenticator {
	private final String PWDPREFIX = "/PWDMSG/";
	private final String PWD = "melons";
	
	public boolean shouldAuthenticate(String message) {
		return message.startsWith(PWDPREFIX);
	}
	
	public boolean authenticate(String passwordSubmission, DataOutputStream out) throws IOException {
		if (passwordSubmission.equals(PWDPREFIX + PWD)) {
			out.writeBytes("Correct\n\r");
			out.flush();
			return true;
		} else {
			out.writeBytes("Incorrect\n\r");
			out.flush();
			return false;
		}
	}
}
