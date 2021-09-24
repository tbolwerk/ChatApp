package main.java.client;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.ActionEvent;

import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class ChatGUI implements IChat {

	public static JTextArea chatText = null;
	public static JTextField chatLine = null;
	
	private JTextField nicknameField;
	private Encrypter encrypter;
	private static StringBuffer toSend;

	public ChatGUI(JTextField nicknameField, Encrypter encrypter, StringBuffer toSend) {
		this.nicknameField = nicknameField;
		this.encrypter = encrypter;
		this.toSend = toSend;
	}
	
	public JPanel initGUI() {
		JPanel chatPane = new JPanel(new BorderLayout());
		chatText = new JTextArea(10, 20);
		chatText.setLineWrap(true);
		chatText.setEditable(false);
		chatText.setForeground(Color.BLUE);
		JScrollPane chatTextPane = new JScrollPane(chatText, JScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
				JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
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
	public void append(String s) {
		chatText.append(s);
	}

	// Add text to send-buffer
	private static void sendString(String s) {
		synchronized (toSend) {
			toSend.append(s + "\n");
		}
	}
}
