package spl;

public class Encrypter {
	public String encrypt(String message) {
		String msg = rot13(message);
		msg = reverseMessage(msg);
		return msg;
	}
	
	private String rot13(String message) {
		char[] chars = message.toCharArray();
		char[] rot13Chars = new char[chars.length];
		for (int i = 0; i < chars.length; i++) {
			char charCode = chars[i];
			if (chars[i] >= 'a' && chars[i] <= 'm') charCode = chars[i] += 13;
            else if (chars[i] >= 'A' && chars[i] <= 'M') charCode = chars[i] += 13;
            else if (chars[i] >= 'n' && chars[i] <= 'z') charCode = chars[i] -= 13;
            else if (chars[i] >= 'N' && chars[i] <= 'Z') charCode = chars[i] -= 13;
			rot13Chars[i] = charCode;
		}
		return String.valueOf(rot13Chars);
	}
	
	private String reverseMessage(String message) {
		char[] chars = message.toCharArray();
		char[] reverseChars = new char[chars.length];
		for (int i = 0; i < chars.length; i++) {
			reverseChars[i] = chars[chars.length-i-1];
		}
		return String.valueOf(reverseChars);
	}
}
