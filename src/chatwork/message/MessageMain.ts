import { TwitterAdStatus } from "../../twitter/enums/TwitterAdStatus";
import { MessageProcessor } from "./MessageProcessor";

export class MessageMain {

    private processor: MessageProcessor = new MessageProcessor();

    public process(twiiterAdStatus: TwitterAdStatus) {
        this.processor.initiateMessage(twiiterAdStatus);
        let timerId = setInterval(() => {
            this.processor.updateMain();
            console.log(this.processor.getMessage());
        }, this.processor.interval);
    }

    public getMessage(): string {
        return this.processor.getMessage();
    }

    public getInterval(): number {
        return this.processor.interval;
    }

}