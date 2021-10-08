import javax.swing.JPanel;

public class BaseChat implements IChat {

	@Override
	public JPanel createGuiComponent(Client client) {
		// TODO Auto-generated method stub
		return null;
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

	@Override
	public void append(String s) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public StringBuffer getSendBuffer() {
		return new StringBuffer("");
	}

}
