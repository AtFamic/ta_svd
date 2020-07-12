import { TwitterAdStatus } from "../../twitter/enums/TwitterAdStatus";
import { MessageProcessor } from "./MessageProcessor";
import { TwitterController } from "../../twitter/TwitterController";

export class MessageMain {

    private processor: MessageProcessor = new MessageProcessor();

    public process(twiiterAdStatus: TwitterAdStatus) {
        this.processor.initiateMessage(twiiterAdStatus);
        let twitterController = new TwitterController;
        let timerId = setInterval(() => {
            this.processor.updateMain();
            console.log(this.processor.getMessage());
            if (twitterController.isFinished()) {
                clearInterval(timerId);
            }
        }, this.processor.interval);
    }

    public getMessage(): string {
        return this.processor.getMessage();
    }

    public getInterval(): number {
        return this.processor.interval;
    }

    public getFinishedMessage(): string {
        return this.processor.getFinishedMessage();
    }

}