package client;

public enum ConnectionStatus {
	 NULL(0),
	 DISCONNECTED(1),
	 DISCONNECTING(2),
	 BEGIN_CONNECT(3),
	 CONNECTED(4);
	 
	 private int id;

	ConnectionStatus(int id){
	    this.id = id;
	  }
	public static ConnectionStatus get(int id) {
		ConnectionStatus result;
		switch(id) {
		case 0:
			result = NULL;
			break;
		case 1:
			result = DISCONNECTED;
			break;
		case 2:
			result =  DISCONNECTING;
			break;
		case 3:
			result =  BEGIN_CONNECT;
			break;
		case 4:
			result =  CONNECTED;
			break;
		default:
			result = NULL;
		}
		return result;
	}
	
	  public int getID(){
	    return id;
	  }
}
