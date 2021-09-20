package main.java.spl;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.util.ArrayList;

public class EchoThread extends Thread {
	private final String PWDPREFIX = "/PWDMSG/";
	private final String PWD = "melons";

	protected Socket socket;
	protected ArrayList<Socket> others;
	private Logger logger = new Logger();
	
	public EchoThread(Socket clientSocket, ArrayList<Socket> others) {
		this.socket = clientSocket;
		this.others = others;
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
				System.out.print(line);
				if ((line == null) || line.equalsIgnoreCase("QUIT")) {
					// Remove connection
					socket.close();
					others.remove(socket);
					return;
				} 
				//#if Authentication
				else if (line.startsWith(PWDPREFIX)) {
					// Authenticate
					if (line.equals(PWDPREFIX + PWD)) {
						out = new DataOutputStream(socket.getOutputStream());
						out.writeBytes("Correct\n\r");
						out.flush();
					} else {
						out = new DataOutputStream(socket.getOutputStream());
						out.writeBytes("Incorrect\n\r");
						out.flush();
					}
				} 
				//#endif
				else {
					// Send messages to other sockets
					for (Socket other : others) {
						System.out.println("Incoming message: " + line);
						//#if Logging
						this.logger.log("server_log.txt", line);
						//#endif
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
