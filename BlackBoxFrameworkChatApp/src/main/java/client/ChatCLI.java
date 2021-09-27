package main.java.client;

public class ChatCLI implements IChat {
	
	@Override
	public void append(String s) {
		System.out.println(s);
	}
}
