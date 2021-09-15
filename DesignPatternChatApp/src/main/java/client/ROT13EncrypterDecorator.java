package client;

public class ROT13EncrypterDecorator extends EncrypterDecorator {

	public ROT13EncrypterDecorator(IEncrypter encrypter) {
		super(encrypter);
	}

	@Override
	public String encrypt(String message) {
		System.out.println("Encrypting: " + message);
		message = this.encrypter.encrypt(message);
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

}
