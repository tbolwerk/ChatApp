package GUI.client;

import Base.interfaces.IChat;
import Base.interfaces.IColor;
import Base.interfaces.IEncrypter;

/**
 * TODO description
 */
public class Main {
    protected IChat initChat(IColor c, IEncrypter e){
        return new ChatGUI(c,e);
    }
}