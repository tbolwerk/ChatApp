package client;

import java.awt.FlowLayout;
import java.util.Random;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class NicknameFeature extends Feature {
	
	private JPanel optionsPane= null;
	private JTextField nicknameField;
	private static String nickname = "Guest " + String.valueOf(new Random().nextInt(100));
	
	public NicknameFeature(JPanel optionsPane, String nickname) {
		
		this.optionsPane = optionsPane;
		if(nickname != null)
			NicknameFeature.nickname = nickname;
	}
	
	public String getNickname() {
		return nickname;
	}
	
	@Override
	public void init() {
		 // Nickname input
	      JPanel pane = null;  
	      pane = new JPanel(new FlowLayout(FlowLayout.RIGHT));
	      pane.add(new JLabel("Nickname:"));
	      nicknameField = new JTextField(10);
	      nicknameField.setEditable(true);
	      nicknameField.setText(nickname);
	      pane.add(nicknameField);
	      optionsPane.add(pane);
	}
	
	@Override
	public void run(ConnectionStatus connectionStatus) {
		switch (connectionStatus) {
	      case DISCONNECTED:
	         nicknameField.setEnabled(true);
	         break;
	      case DISCONNECTING:
	         break;
	      case CONNECTED:
	         nicknameField.setEnabled(false);
	         break;
	      case BEGIN_CONNECT:
	         break;
		default:
			break;
	      }
		
	}

	@Override
	public boolean disabled() {
		return false;
	}

}
