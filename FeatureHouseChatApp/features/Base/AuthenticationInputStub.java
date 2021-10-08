import javax.swing.JPanel;

public class AuthenticationInputStub implements IAuthenticationInput {

	@Override
	public JPanel createGuiComponent(Client client) {
		return new JPanel();
	}

	@Override
	public String getPassword() {
		return "";
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
