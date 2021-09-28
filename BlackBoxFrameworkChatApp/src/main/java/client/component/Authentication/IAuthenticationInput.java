package main.java.client.component.Authentication;

import javax.swing.JPanel;
import javax.swing.JTextField;

public interface IAuthenticationInput {
	public JPanel createGuiComponent();
	public void setEnabled(boolean b);
	public String getPassword();
}
