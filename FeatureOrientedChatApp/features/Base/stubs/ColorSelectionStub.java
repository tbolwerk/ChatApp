package Base.stubs;

import javax.swing.JPanel;
import javax.swing.JTextArea;

import Base.client.Client;
import Base.interfaces.IColor;



public class ColorSelectionStub implements IColor {

	@Override
	public JPanel createGuiComponent(Client client) {
		return new JPanel();
	}

	@Override
	public void setChatText(JTextArea text) {
		
	}

}
