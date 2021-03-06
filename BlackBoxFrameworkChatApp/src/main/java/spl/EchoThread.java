package main.java.spl;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.util.ArrayList;

import main.java.client.ILogger;
import main.java.client.component.Authentication.IServerAuthenticator;
import main.java.client.component.Authentication.ServerPasswordAuthenticator;

public class EchoThread extends Thread {
	protected Socket socket;
	protected ArrayList<Socket> others;
	private ILogger logger;
	private IServerAuthenticator authenticator;
	
	public EchoThread(
			Socket clientSocket,
			ArrayList<Socket> others,
			ILogger logger,
			IServerAuthenticator authenticator
			) {
		this.socket = clientSocket;
		this.others = others;
		this.logger = logger;
		this.authenticator = authenticator;
	}

	public void run() {
		InputStream inp = null;
		BufferedReader brinp = null;
		DataOutputStream out = null;
		try {
			inp = socket.getInputStream();
			brinp = new BufferedReader(new InputStreamReader(inp));

		} catch (IOException e) {
			return;
		}
		String line;
		while (true) {
			try {
				line = brinp.readLine();
				if ((line == null) || line.equalsIgnoreCase("QUIT")) {
					// Remove connection
					socket.close();
					others.remove(socket);
					return;
				} 
				else if (authenticator.shouldAuthenticate(line)) {
					out = new DataOutputStream(socket.getOutputStream());
					if (!authenticator.authenticate(line, out)) {
						others.remove(socket);
					}
				} 
				else {
					// Send messages to other sockets
					for (Socket other : others) {
						this.logger.log("server_log.txt", line);
						out = new DataOutputStream(other.getOutputStream());
						out.writeBytes(line + "\n\r");
						out.flush();
					}
				}
			} catch (IOException e) {
				e.printStackTrace();
				return;
			}
		}
	}
}
