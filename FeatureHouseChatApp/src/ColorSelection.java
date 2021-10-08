import java.awt.event.*; 
import java.awt.*; 
import javax.swing.*; 

import main.java.client.Client; 

public  class  ColorSelection  implements IGUIComponent, IColor {
	
	int startIndex = 0;

	
	String[] colorNames = { "blue", "red", "green" };

	
	private JTextArea chatText = null;

	
	
	public ColorSelection() {
	}

	

	public void setChatText(JTextArea text) {
		this.chatText = text;
	}

	
	
	public JPanel createGuiComponent(Client client) {
		JPanel pane = new JPanel(new FlowLayout(FlowLayout.RIGHT));
		pane.add(new JLabel("Color: "));
		JComboBox colorSelectionBox = new JComboBox(colorNames);
		colorSelectionBox.setSelectedIndex(startIndex);
		colorSelectionBox.addActionListener(selectActionAdapter);
		pane.add(colorSelectionBox);
		return pane;
	}

	
	
	private String codeToName(Color code) {
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

	
	
	private Color nameToCode(String name) {
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

	
	
	// Actions
	private ActionAdapter selectActionAdapter = new ActionAdapter() {
		public void actionPerformed(ActionEvent e) {
			JComboBox cb = (JComboBox)e.getSource();
			Color selectedItem = nameToCode((String)cb.getSelectedItem());
			if (chatText != null) {
				chatText.setForeground(selectedItem);
				chatText.repaint();
			}
		}
	};


}
