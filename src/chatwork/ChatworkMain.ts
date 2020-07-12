import { ChatworkRoomBase } from "./enums/ChatworkRoomBase";
import { TwitterAdAutomation } from "./enums/TwitterAdAutomation";
import { TwitterAdStatus } from "../twitter/enums/TwitterAdStatus";
import { ChatworkUtils } from "../util/ChatworkUtils";
import { MessageMain } from "./message/MessageMain";
import { TwitterController } from "../twitter/TwitterController";

export class ChatworkMain {

    private room: ChatworkRoomBase = new TwitterAdAutomation;

    private twitterController: TwitterController;

    constructor() {
        this.twitterController = new TwitterController();
    }

    public async process(twitterAdStatus: TwitterAdStatus) {
        let messageMain: MessageMain = new MessageMain();
        messageMain.process(twitterAdStatus);
        let roomId = await ChatworkUtils.sendMesages(new TwitterAdAutomation, messageMain.getMessage());
        let intervalId = setInterval(() => {
            ChatworkUtils.updateMessages(new TwitterAdAutomation, messageMain.getMessage(), roomId);
            if (this.twitterController.isFinished()) {
                ChatworkUtils.updateMessages(new TwitterAdAutomation, messageMain.getFinishedMessage(), roomId);
                clearInterval(intervalId);
            }
        }, messageMain.getInterval());  
    }
}