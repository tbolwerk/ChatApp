package main.java.client.component;

import javax.swing.JPanel;

public class ColorSelectionStub implements IColor {

	@Override
	public JPanel createGuiComponent() {
		return new JPanel();
	}

}
