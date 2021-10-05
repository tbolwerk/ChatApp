package Base.stubs;

import Base.interfaces.IEncrypter;

public class EncrypterStub implements IEncrypter {

	@Override
	public String encrypt(String text) {
		return text;
	}

}
