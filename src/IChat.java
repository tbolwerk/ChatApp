import main.java.client.component.IGUIComponent; 

public  interface  IChat  extends IGUIComponent, IGUIStateComponent {
	
	public void append(String s);

	
	public StringBuffer getSendBuffer();


}
