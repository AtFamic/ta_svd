export class ChatworkRoomBase{
    protected roomName: string;
    protected roomId: string;

    constructor(roomName: string, roomId: string){
        this.roomName = roomName;
        this.roomId = roomId;
    }

    public getRoomName(): string{
        return this.roomName;
    }

    public getRoomId(): string{
        return this.roomId;
    }
}