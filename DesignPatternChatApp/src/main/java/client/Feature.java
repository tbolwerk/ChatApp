package client;

public abstract class Feature {
	public abstract void init();
	public abstract void run(ConnectionStatus connectionStatus);
	public abstract boolean disabled();
}
