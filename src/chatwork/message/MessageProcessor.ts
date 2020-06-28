import { Message } from "./enums/Message";
import { TwitterAdStatus } from "../../twitter/enums/TwitterAdStatus";
import { CollegeBase } from "../../twitter/enums/CollegeBase";
import { TwitterController } from "../../twitter/TwitterController";

export class MessageProcessor {

    private header: string = '';

    private main: string = '';

    public interval: number = 2500; // 0.25sec

    private message: Message = new Message();

    /**
     * initiate header message
     * @param twitterAdStatus 
     */
    public initiateMessage(twitterAdStatus: TwitterAdStatus){
        this.header = Message.processStartMessage + Message.CRLF;
        if(twitterAdStatus.getStatus() === 'ON'){
            this.header = this.header + Message.turnStatusOn + Message.CRLF;
        }else{
            this.header += Message.turnStatusOff + Message.CRLF;
        }
    }

    /**
     * update Main message, which notifies loading situation
     * @param accounts 
     */
    public updateMain(){
        this.main = '';
        this.main = this.message.getLoading() + Message.CRLF;
        this.main += Message.label + Message.CRLF;
        let twitterController = new TwitterController;
        let accounts: CollegeBase[] = twitterController.checkProcess();
        if(!accounts){
            return;
        }
        for(let i = 0; i < accounts.length; i++){
            this.main += accounts[i].getName() + Message.SPACE + Message.status;
            switch(accounts[i].getStatus()){
                case 'WAITING':
                    this.main += Message.waitForWorking + Message.CRLF;
                    break;
                case 'SUCCESS':
                    this.main += Message.sccessWorking + Message.CRLF;
                    break;
                case 'FAIL':
                    this.main += Message.failWorking + Message.CRLF;
                    break;
            }
        }
    }

    public getMessage(){
        return this.header + this.main;
    }

}