package main.java.client.component;

import javax.swing.JPanel;

import main.java.client.Client;

public interface IGUIComponent {
	public JPanel createGuiComponent(Client client);
}
