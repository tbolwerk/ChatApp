package CLI.client;

import Base.interfaces.*;
import GUI.client.ChatGUI;
import main.java.client.ChatCLI;

/**
 * Initializes the app with ChatCLI
 */
public class Main {
    protected IChat initChat(IColor c, IEncrypter e){
        return new ChatCLI();
    }
}