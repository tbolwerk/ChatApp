package server;

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
                if ((line == null) || line.equalsIgnoreCase("QUIT")) {
                	// Remove connection
                    socket.close();
                	others.remove(socket);
                    return;
                } else if (line.startsWith(PWDPREFIX)) {
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
                } else {
                	// Send messages to other sockets
                	for(Socket other : others) {
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