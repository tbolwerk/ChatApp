import java.awt.FlowLayout; 
import java.awt.event.ActionEvent; 

import javax.swing.JLabel; 
import javax.swing.JPanel; 
import javax.swing.JTextField; 


public  class  PasswordInput  implements IGUIComponent, IAuthenticationInput {
	
	public final static String PWDPREFIX = "/PWDMSG/";

	
	private JTextField passwordField;

	
	
	public PasswordInput() {
	}

	
	
	public JPanel createGuiComponent(Client client) {
		JPanel pane = new JPanel(new FlowLayout(FlowLayout.RIGHT));
		pane.add(new JLabel("Password:"));
		this.passwordField = new JTextField(10);
		this.passwordField.setEditable(true);
		this.passwordField.addActionListener(this.createAdapter(client));
		pane.add(this.passwordField);
		return pane;
	}

	
	
	public String getPassword() {
		return passwordField.getText();
	}

	

	public void setEnabled(boolean b) {
		System.out.println("HI IM ENABLING");
		System.out.println(b);
		this.passwordField.setEnabled(b);
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

	

	@Override
	public void onDisconnected() {
		passwordField.setEnabled(true);
		
	}

	

	@Override
	public void onDisconnecting() {
		passwordField.setEnabled(false);
	}

	

	@Override
	public void onConnected() {
		passwordField.setEnabled(false);
		
	}

	

	@Override
	public void onConnecting() {
		passwordField.setEnabled(false);
	}


}
