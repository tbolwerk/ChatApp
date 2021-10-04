package main.java.client.component;

import javax.swing.JPanel;
import javax.swing.JTextArea;

import main.java.client.Client;

public class ColorSelectionStub implements IColor {

	@Override
	public JPanel createGuiComponent(Client client) {
		return new JPanel();
	}

	@Override
	public void setChatText(JTextArea text) {
		
	}

}
