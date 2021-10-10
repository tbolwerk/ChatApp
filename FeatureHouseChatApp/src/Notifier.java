import java.awt.Toolkit; 

/**
 * TODO description
 */
public  class  Notifier  implements INotifier {
	
	public void doNotify() {
		System.out.println("Playing notification sound. *BEEP*");
		Toolkit.getDefaultToolkit().beep();
	}


}
