package main.java.client;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.util.Random;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import main.java.client.component.ActionAdapter;
import main.java.client.component.IColor;

public class ChatGUI extends BaseChat {

	public static JTextArea chatText = null;
	public static JTextField chatLine = null;
	
	private static StringBuffer sendBuffer = new StringBuffer("");
	
	private static JTextField nicknameField;
	private IEncrypter encrypter;
	private IColor color;
	
	public ChatGUI(IColor color, IEncrypter encrypter) {
		this.color = color;
		this.encrypter = encrypter;
	}
	

	@Override
	public void append(String s) {
		chatText.append(s);
	}

	// Add text to send-buffer
	private static void sendString(String s) {
		synchronized (sendBuffer) {
			sendBuffer.append(s + "\n");
		}
	}

	@Override
	public JPanel createGuiComponent(Client client) {
		// Nickname input
		JPanel nickPane = new JPanel(new FlowLayout(FlowLayout.RIGHT));
		nickPane.add(new JLabel("Nickname:"));
		nicknameField = new JTextField(10);
		nicknameField.setEditable(true);
		nicknameField.setText("Guest " + String.valueOf(new Random().nextInt(100)));
		nickPane.add(nicknameField);
		client.optionsPane.add(nickPane);
		
		JPanel chatPane = new JPanel(new BorderLayout());
		chatText = new JTextArea(10, 20);
		chatText.setLineWrap(true);
		chatText.setEditable(false);
		chatText.setForeground(Color.BLUE);
		JScrollPane chatTextPane = new JScrollPane(chatText, JScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
				JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
		
		this.color.setChatText(chatText);

		chatLine = new JTextField();
		chatLine.setEnabled(false);
		chatLine.addActionListener(new ActionAdapter() {
			public void actionPerformed(ActionEvent e) {
				String s = chatLine.getText();
				if (!s.equals("")) {
					chatLine.selectAll();
					// Send the string
					String content = nicknameField.getText() + ": " + s;
					//#if Encryption
					content = encrypter.encrypt(content);
					//#endif
					chatLine.setText("");
					sendString(content);
				}
			}
		});

		chatPane.add(chatLine, BorderLayout.SOUTH);
		chatPane.add(chatTextPane, BorderLayout.CENTER);
		chatPane.setPreferredSize(new Dimension(200, 300));
		
		return chatPane;
	}

	@Override
	public void onDisconnected() {
		nicknameField.setEnabled(true);
		chatLine.setText("");
		chatLine.setEnabled(false);
		
	}

	@Override
	public void onDisconnecting() {
		chatLine.setEnabled(false);
		
	}

	@Override
	public void onConnected() {
		chatLine.setEnabled(true);
		nicknameField.setEnabled(false);
	}

	@Override
	public void onConnecting() {
		chatLine.setEnabled(false);
		chatLine.grabFocus();		
	}


	@Override
	public StringBuffer getSendBuffer() {
		// TODO Auto-generated method stub
		return sendBuffer;
	}
}
