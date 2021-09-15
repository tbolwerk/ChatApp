package client;

public abstract class EncrypterDecorator implements IEncrypter {
	
	protected IEncrypter encrypter;
	
	public EncrypterDecorator(IEncrypter encrypter) {
		this.encrypter = encrypter;
	}

	@Override
	public String encrypt(String message) {
		return this.encrypter.encrypt(message);
	}

}
