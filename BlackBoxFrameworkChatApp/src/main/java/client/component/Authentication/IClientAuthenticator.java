package main.java.client.component.Authentication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

public interface IClientAuthenticator {
	boolean authenticate(PrintWriter out, BufferedReader in, String password) throws IOException;
}
