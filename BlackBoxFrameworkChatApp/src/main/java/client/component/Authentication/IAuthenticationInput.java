package main.java.client.component.Authentication;

import javax.swing.JPanel;
import javax.swing.JTextField;

import main.java.client.IGUIStateComponent;
import main.java.client.component.IGUIComponent;

public interface IAuthenticationInput extends IGUIComponent, IGUIStateComponent {
	public String getPassword();
}
