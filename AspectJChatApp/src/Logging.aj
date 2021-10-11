import server.Logger;

public aspect Logging {
    private Logger logger = new Logger();
    
    pointcut appendToChatBox(String s) : call(void appendToChatBox(String)) && args(s);
    before(String s) : appendToChatBox(s) {
        logger.log("client_log.txt", s);
    }
    
    pointcut writeBytes(String s) : call(void *.writeBytes(String)) && within(server.EchoThread) && args(s);
    before(String s) : writeBytes(s) {
        logger.log("server_log.txt", s);
    }
}
