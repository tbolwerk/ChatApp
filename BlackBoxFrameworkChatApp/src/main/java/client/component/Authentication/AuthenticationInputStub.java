package main.java.client.component.Authentication;

import javax.swing.JPanel;

import main.java.client.Client;

public class AuthenticationInputStub implements IAuthenticationInput {

	@Override
	public JPanel createGuiComponent(Client client) {
		return new JPanel();
	}

	@Override
	public void setEnabled(boolean b) {

	}

	@Override
	public String getPassword() {
		return "";
	}

}
