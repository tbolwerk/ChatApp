package main.java.client;

import javax.swing.JPanel;

public class ChatCLI extends BaseChat {
	
	@Override
	public void append(String s) {
		System.out.println(s);
	}

	@Override
	public JPanel createGuiComponent(Client client) {
		// TODO Auto-generated method stub
		return new JPanel();
	}

	@Override
	public void onDisconnected() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onDisconnecting() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onConnected() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onConnecting() {
		// TODO Auto-generated method stub
	}
}
