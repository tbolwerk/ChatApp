package main.java.client.component.Authentication;

import javax.swing.JPanel;

public class AuthenticationInputStub implements IAuthenticationInput {

	@Override
	public JPanel createGuiComponent() {
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
