package spl;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.util.ArrayList;

public class EchoThread extends Thread {
    protected Socket socket;
    protected ArrayList<Socket> others;
    private Logger logger = new Logger();

    public EchoThread(Socket clientSocket, ArrayList<Socket> others) {
        this.socket = clientSocket;
        this.others = others;
    }
    
    private boolean isDisconnected(String line) {
    	return (line == null) || (line.equalsIgnoreCase("QUIT"));
    }

    public void run() {
        InputStream inp = null;
        BufferedReader buffer = null;
        DataOutputStream out = null;
        try {
            inp = socket.getInputStream();
            buffer = new BufferedReader(new InputStreamReader(inp));
            
        } catch (IOException e) {
            return;
        }
        String line;
        while (true) {
            try {
                line = buffer.readLine();
                if (isDisconnected(line)) {
                    socket.close();
                	others.remove(socket);
                    return;
                } else {
                	for(Socket other : others) {
                		System.out.println("Incoming message: "  + line);
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