type twitterAdStatus = 'ON' | 'OFF';

export class TwitterAdStatus {
    status: twitterAdStatus;

    constructor(status: twitterAdStatus) {
        this.status = status;
    }

    public getStatus() {
        return this.status;
    }
}