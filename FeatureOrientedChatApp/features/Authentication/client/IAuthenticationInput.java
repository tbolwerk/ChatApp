package Authentication.client;

import Base.interfaces.IGUIComponent;
import Base.interfaces.IGUIStateComponent;

import javax.swing.JPanel;
import javax.swing.JTextField;

public interface IAuthenticationInput extends IGUIComponent, IGUIStateComponent {
	public String getPassword();
}
