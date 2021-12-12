import { getSounds, insertSound, getAllSounds, updateFavorite } from "../dataAccess/soundDAO";
import {getAudioUrl} from "google-tts-api";
import Axios from "axios";
import fs from 'fs';
import {randomUUID} from "crypto";

class SoundController {
    async get(username:string) {
        return await getSounds(username);
    }

    async save(name: string, path: string, user: string) {
        await insertSound(name, path, user, 0);
    }

    async setFavorite(name: string, path: string, user: string, favorite: boolean) {
        await updateFavorite(name, path, user, favorite);
    }

    async getAll() {
        return await getAllSounds();
    }

    async createTTS(text: string): Promise<string> {
        try {
            const url = getAudioUrl(text);
            const res = await Axios.get(url, {
                responseType: "arraybuffer"
            });
            const buf = Buffer.from(res.data, 'binary');
            const fileName = `${randomUUID()}.mp3`;
            fs.writeFileSync(`uploads/${fileName}`, buf);
            return fileName;
        } catch (e) {
            throw e;
        }
    }
}

const controller = new SoundController();

export default controller;
