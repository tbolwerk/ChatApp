package main.java.client.component.Authentication;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import main.java.client.Client;
import main.java.client.component.ActionAdapter;
import main.java.client.component.IGUIComponent;

public class PasswordInput implements IGUIComponent, IAuthenticationInput {
	public final static String PWDPREFIX = "/PWDMSG/";
	private JTextField passwordField;
	
	public PasswordInput() {
	}
	
	public JPanel createGuiComponent(Client client) {
		JPanel pane = new JPanel(new FlowLayout(FlowLayout.RIGHT));
		pane.add(new JLabel("Password:"));
		passwordField = new JTextField(10);
		passwordField.setEditable(true);
		passwordField.addActionListener(this.createAdapter(client));
		pane.add(passwordField);
		return pane;
	}
	
	public String getPassword() {
		return passwordField.getText();
	}

	public void setEnabled(boolean b) {
		passwordField.setEnabled(b);
	}
	
	// Actions
	
	private ActionAdapter createAdapter(Client client) {
		return new ActionAdapter() {
			public void actionPerformed(ActionEvent e) {
				JTextField field = (JTextField) e.getSource();
				client.sendString(PWDPREFIX + field.getText());
			}
		};
	}

	
}
