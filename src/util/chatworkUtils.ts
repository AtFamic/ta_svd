import axios from 'axios';
import { ChatworkRoomBase } from '../chatwork/enums/ChatworkRoomBase';
import { PathUtils } from './PathUtils';
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

    /**
     * Function of sending a report to Chatwork
     * @param room the room to send the file
     * @param body send file with this message
     * @param file_name pass the file name, after '/resource/'
     */
    public static sendFile(room: ChatworkRoomBase, body: string, file_name: string) {
        const fs = require('fs');
        const FormData = require('form-data');
        const form = new FormData()
        const file = fs.createReadStream(PathUtils.getReportFilePath(file_name));
        form.append('file', file);
        form.append('message', body);
        const client = axios.create({
            baseURL: 'https://api.chatwork.com/v2/',
            headers: {
                'X-ChatWorkToken': process.env.token,
                ...form.getHeaders(),
            },
        });
        let room_id = room.getRoomId();
        (async () => {
            let res = await client.post(`rooms/${room_id}/files`, form).catch(console.log);
            console.log(res);
        })();

    }
}