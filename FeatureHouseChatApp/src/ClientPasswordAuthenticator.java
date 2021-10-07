import java.io.BufferedReader; 
import java.io.IOException; 
import java.io.PrintWriter; 

public  class  ClientPasswordAuthenticator  implements IClientAuthenticator {
	
	public final static int MAX_PWD_RETRIES = 1000;

	
	private final String PWDPREFIX = "/PWDMSG/";

	
	
	public boolean authenticate(PrintWriter out, BufferedReader in, String password) throws IOException {
		out.print(PWDPREFIX + password + "\n\r");
		out.flush();

		int retryCount = 0;
		retryloop: while (retryCount < MAX_PWD_RETRIES) {
			if (in.ready()) {
				String res = in.readLine();
				if (res.equals("Correct")) {
					return true;
				} else if (res.equals("Incorrect")) {
					return false;
				}
			}
		}
		return false;
	}


}
