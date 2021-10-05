package Base.interfaces;

public interface IChat extends IGUIComponent, IGUIStateComponent {
	public void append(String s);
	public StringBuffer getSendBuffer();
}
