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
         
         
         while(true) {
        	 socket = hostServer.accept();
        	 socketPool.add(socket);
        	 new EchoThread(socket, socketPool).start();
         }
         
         
         
         
//         in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
//         out = new PrintWriter(socket.getOutputStream(), true);
//  	   	 
//         int port = -1;
//         // Get a free port
//         try (ServerSocket serverSocket = new ServerSocket(0)) {        	   
//        	    port = serverSocket.getLocalPort();
//        	    if(port < 0) {
//        	    	throw new IOException("No free ports found");
//        	    }
//        	    System.out.println("Create socket on port: " + port);
//        	    Thread thread = new Thread(){
//        	        public void run(){
//        	          System.out.println("Thread Running");
//        	  	    Socket connection = null;
//					try {
//						connection = serverSocket.accept();
//					} catch (IOException e) {
//						e.printStackTrace();
//					} // TODO: make this a separate thread, because accept() blocks the main thread.
//              	    	socketPool.add(connection);
//        	        }
//        	      };
//        	    thread.start();
//        
//          } catch (Exception e) {
//        	    System.out.println(e.getMessage());
//          }
//         
//         // Communicate new port
//         sendString(""+port);
//         out.print(toSend); out.flush();
//         toSend.setLength(0);
//         
//         while (true) {
//	         try { // Poll every ~10 ms
//	            Thread.sleep(10);
//	         }
//	         catch (InterruptedException e) {}
//         String s;
//             // Receive data
//             if (in.ready()) {
//            	 System.out.println("Connection established!");   
//                s = in.readLine();
//                if ((s != null) &&  (s.length() != 0)) {
//                   // Check if it is the end of a trasmission
//                   if (s.equals(END_CHAT_SESSION)) {
//                      cleanUp();
//                      break;
//                   }
//
//                   // Otherwise, receive what text
//                   else {
//                	   System.out.println(s);
//                	   out.append(s);
//                    
//                   }
//                }
//             }
//    	  }
//        
         
         
      }
      catch(Exception e) {
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
	   for (Socket s : socketPool){
		   if(s.isClosed() == false)
			   s.close();
		   s = null;
	   }
	   socketPool.clear();
	   System.out.println("Gracefully closed connection");
   }
}