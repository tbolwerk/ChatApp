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
	private Client client;
	
	public PasswordInput(Client client) {
		this.client = client;
	}
	
	public JPanel createGuiComponent() {
		JPanel pane = new JPanel(new FlowLayout(FlowLayout.RIGHT));
		pane.add(new JLabel("Password:"));
		passwordField = new JTextField(10);
		passwordField.setEditable(true);
		passwordField.addActionListener(sendPasswordAction);
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
	ActionAdapter sendPasswordAction = new ActionAdapter() {
		public void actionPreformed(ActionEvent e) {
			JTextField field = (JTextField) e.getSource();
			client.sendString(PWDPREFIX + field.getText());
		}
	};
}
