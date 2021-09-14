package spl;

/**
 * Hello world!
 *
 */
import java.lang.*;
import java.io.*;
import java.net.*;
import java.nio.file.FileSystemNotFoundException;
import java.util.ArrayList;

import client.FeatureConfiguration;

class Server {

	// TCP components
	public static ServerSocket hostServer = null;
	public static Socket socket = null;
	public static ArrayList<Socket> socketPool = new ArrayList<Socket>();

	public static BufferedReader in = null;
	public static PrintWriter out = null;

	public final static int NULL = 0;

	public static StringBuffer toSend = new StringBuffer("");

	public static void main(String args[]) {
		try {

			System.out.println("Starting listening on port: " + 1234);
			hostServer = new ServerSocket(1234);

			while (true) {
				socket = hostServer.accept();
				socketPool.add(socket);
				new EchoThread(socket, socketPool).start();
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	// Add text to send-buffer
	private static void sendString(String s) {
		synchronized (toSend) {
			toSend.append(s + "\n");
		}
	}

	private static void cleanUp() throws IOException {
		hostServer.close();
		hostServer = null;
		socket.close();
		socket = null;
		for (Socket s : socketPool) {
			if (s.isClosed() == false)
				s.close();
			s = null;
		}
		socketPool.clear();
		System.out.println("Gracefully closed connection");
	}
}