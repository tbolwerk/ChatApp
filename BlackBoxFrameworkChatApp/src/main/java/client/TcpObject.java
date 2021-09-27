package main.java.client;

import java.util.*;
import java.io.*;
import java.net.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

import main.java.client.component.ColorSelection;
import main.java.spl.Logger;


public class TcpObject {
	// Connect status constants
    	public final static int NULL = 0;
    	public final static int DISCONNECTED = 1;
    	public final static int DISCONNECTING = 2;
    	public final static int BEGIN_CONNECT = 3;
    	public final static int CONNECTED = 4;

    	// Other constants
    	public final static String statusMessages[] = { " Error! Could not connect!", " Disconnected", " Disconnecting...",
    			" Begin Connecting...", " Connected" };
    	public final static Client tcpObj = new Client();
    	public final static String END_CHAT_SESSION = "QUIT"; // Indicates the end of a session
    	public final static String PWDPREFIX = "/PWDMSG/";
    	public final static int MAX_PWD_RETRIES = 1000;

    	// Connection state info
    	public static String hostIP = "localhost";
    	public static int port = 1234;
    	public static int connectionStatus = DISCONNECTED;
    	public static String statusString = statusMessages[connectionStatus];
    	public static StringBuffer toAppend = new StringBuffer("");
    	public static StringBuffer toSend = new StringBuffer("");
    	public static String serverSecret = "";

    	// TCP Components
        	public static ServerSocket hostServer = null;
        	public static Socket socket = null;
        	public static BufferedReader in = null;
        	public static PrintWriter out = null;

        	private static Encrypter encrypter = new Encrypter();
        	private static Logger logger = new Logger();


        	// The main procedure
            	public void start() {
            		String s;

            		initGUI();

            		while (true) {
            			try { // Poll every ~10 ms
            				Thread.sleep(10);
            			} catch (InterruptedException e) {
            			}

            			switch (connectionStatus) {
            			case BEGIN_CONNECT:
            				try {
            					// Try to connect to the server
            					socket = new Socket(hostIP, port);
            					in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            					out = new PrintWriter(socket.getOutputStream(), true);
            					// Send password
            					if (passwordField != null) {
            						//#if Authentication
            						out.print(PWDPREFIX + passwordField.getText() + "\n\r");
            						out.flush();

            						int retryCount = 0;
            						retryloop: while (retryCount < MAX_PWD_RETRIES) {
            							if (in.ready()) {
            								String res = in.readLine();
            								if (res.equals("Correct")) {
            									changeStatusNTS(CONNECTED, true);
            									break retryloop;
            								} else if (res.equals("Incorrect")) {
            									throw new Exception("Invalid password");
            								}
            							}
            						}
            						//#endif
            					} else {
            						changeStatusNTS(CONNECTED, true);
            					}
            				}
            				// If error, clean up and output an error message
            				catch (Exception e) {
            					cleanUp();
            					changeStatusTS(DISCONNECTED, false);
            				}
            				break;
            			case CONNECTED:
            				try {
            					// Send data
            					if (toSend.length() != 0) {
            						out.print(toSend);
            						out.flush();
            						toSend.setLength(0);
            						changeStatusTS(NULL, true);
            					}

            					// Receive data
            					if (in.ready()) {
            						s = in.readLine();
            						if ((s != null) && (s.length() != 0)) {
            							// Check if it is the end of a transmission
            							if (s.equals(END_CHAT_SESSION)) {
            								changeStatusTS(DISCONNECTING, true);
            							}

            							// Otherwise, receive what text
            							else {
            								//#if Logging
            								logger.log("client_log.txt", s);
            								//#endif
            								String content = s;
            								//#if Encryption
            								content = encrypter.encrypt(s);
            								//#endif
            								appendToChatBox(content + "\n");
            								changeStatusTS(NULL, true);
            							}
            						}
            					}
            				} catch (IOException e) {
            					cleanUp();
            					changeStatusTS(DISCONNECTED, false);
            				}
            				break;

            			case DISCONNECTING:
            				// Tell other chatter to disconnect as well
            				out.print(END_CHAT_SESSION);
            				out.flush();

            				// Clean up (close all streams/sockets)
            				cleanUp();
            				changeStatusTS(DISCONNECTED, true);
            				break;

            			default:
            				break; // do nothing
            			}
            		}
            	}

}
