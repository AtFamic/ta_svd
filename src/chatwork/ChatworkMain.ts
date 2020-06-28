import { ChatworkRoomBase } from "./enums/ChatworkRoomBase";
import { TwitterAdAutomation } from "./enums/TwitterAdAutomation";
import { TwitterAdStatus } from "../twitter/enums/TwitterAdStatus";
import { Message } from "./message/enums/Message";
import { ChatworkUtils } from "../util/ChatworkUtils";
import { MessageMain } from "./message/MessageMain";

export class ChatworkMain {

    private message: string = '';

    private message_id: string = '';

    private room: ChatworkRoomBase = new TwitterAdAutomation;

    public async process(twitterAdStatus: TwitterAdStatus) {
        let messageMain: MessageMain = new MessageMain();
        messageMain.process(twitterAdStatus);
        let roomId = await ChatworkUtils.sendMesages(new TwitterAdAutomation, messageMain.getMessage());
        setInterval(() => {
            ChatworkUtils.updateMessages(new TwitterAdAutomation, messageMain.getMessage(), roomId);
        }, messageMain.getInterval());
    }
}