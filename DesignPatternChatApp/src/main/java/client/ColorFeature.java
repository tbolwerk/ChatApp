package client;

import java.awt.Color;
import java.awt.FlowLayout;

import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;

import client.component.ColorSelection;

public class ColorFeature extends Feature{

	   // Custom GUI components
	   public  ColorSelection colorSelection = null;
	   
	   
	   private JPanel optionsPane = null;
	   private JTextArea chatText = null;
	   
	   public ColorFeature(JPanel optionsPane, JTextArea chatText) {
		   
		   this.optionsPane = optionsPane;
		   this.chatText = chatText;
	   }
	    @Override
		public void init() {
			   // Color input
	        JPanel pane = null;  
		      pane = new JPanel(new FlowLayout(FlowLayout.RIGHT));
		      pane.add(new JLabel("Color: "));
		      this.colorSelection = new ColorSelection(chatText);
		      this.chatText.setForeground(Color.RED);
		      JComboBox colorSelectionBox = colorSelection.init();
		      pane.add(colorSelectionBox);
		      this.optionsPane.add(pane);
		}
		@Override
		public void run(ConnectionStatus connectionStatus) {
			
			
		}
		@Override
		public boolean disabled() {
			return false;
		}
	
	
}
