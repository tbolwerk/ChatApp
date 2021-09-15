package client;

public class ReverseEncrypterDecorator extends EncrypterDecorator {

	public ReverseEncrypterDecorator(IEncrypter encrypter) {
		super(encrypter);
	}

	@Override
	public String encrypt(String message) {
		message = this.encrypter.encrypt(message);
		char[] chars = message.toCharArray();
		char[] reverseChars = new char[chars.length];
		for (int i = 0; i < chars.length; i++) {
			reverseChars[i] = chars[chars.length-i-1];
		}
		return String.valueOf(reverseChars);
	}

}
