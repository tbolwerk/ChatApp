package main.java.client;

public class EncrypterStub implements IEncrypter {

	@Override
	public String encrypt(String text) {
		return text;
	}

}
