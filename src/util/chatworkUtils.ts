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

    public static async sendMesages(room: ChatworkRoomBase, body: string) {
        let client = this.getClient();
        let room_id = room.getRoomId();
        let message_id: string = '';
        await client.post(`rooms/${room_id}/messages`, `body=${body}`).then(res => {
            message_id = res.data.message_id;
        }).catch(console.log);
        return message_id;
    }

    public static updateMessages(room: ChatworkRoomBase, body: string, message_id: string) {
        let client = this.getClient();
        let room_id = room.getRoomId();
        client.put(`rooms/${room_id}/messages/${message_id}`, `body=${body}`).catch(console.log);
    }
}