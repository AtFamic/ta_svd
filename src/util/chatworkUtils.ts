import axios from 'axios';
import { ChatworkRoomBase } from '../chatwork/enums/ChatworkRoomBase';
require('dotenv').config();

export class ChatworkUtils {

    private static baseUrl: string = 'https://api.chatwork.com/v2/';



    private static getClient() {
        const client = axios.create({
            baseURL: 'https://api.chatwork.com/v2/',
            headers: { 'X-ChatWorkToken': process.env.token },
        });
        return client;
    }

    public static sendMesages(room: ChatworkRoomBase, body: string): void {
        let client = this.getClient();
        let room_id = room.getRoomId();
        client.post(`rooms/${room_id}/messages`, `body=${body}`).catch(console.log);
    }
}