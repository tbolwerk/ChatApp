package client.component;

import java.awt.event.*;
import java.awt.*;
import javax.swing.*;

public class ColorSelection implements ActionListener {
	int startIndex = 0;
	String[] colorNames = { "blue", "red", "green" };
	private JTextArea chatText = null;
	
	public ColorSelection(JTextArea chatText) {
		this.chatText = chatText;
	}

	public JComboBox init() {
		JComboBox colorSelectionBox = new JComboBox(colorNames);
		colorSelectionBox.setSelectedIndex(startIndex);
		colorSelectionBox.addActionListener(this);
		return colorSelectionBox;
	}
	
	public String codeToName(Color code) {
		if (code.toString() == Color.RED.toString()) {
			return "red";
		} else if (code.toString() == Color.BLUE.toString()) {
			return "blue";
		} else if (code.toString() == Color.GREEN.toString()) {
			return "green";
		} else {
			return null;
		}
	}
	
	public Color nameToCode(String name) {
		switch(name) {
			case "red":
				return Color.RED;
			case "blue":
				return Color.BLUE;
			case "green":
				return Color.GREEN;
			default:
				return null;
		}
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		JComboBox cb = (JComboBox)e.getSource();
		Color selectedItem = nameToCode((String)cb.getSelectedItem());
		if (chatText != null) {
			chatText.setForeground(selectedItem);
			chatText.repaint();
		}
	}
}
