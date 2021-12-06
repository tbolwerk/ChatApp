import { getSounds, insertSound, updateFavorite, getAllSounds } from "../dataAccess/soundDAO";
import {getAudioUrl} from "google-tts-api";
import Axios from "axios";
import {type} from "os";
import { Blob } from 'buffer';
import fs from 'fs';

class SoundController {
    get(username:string) {
        return getSounds(username);
    }

    save(name: string, path: string, user: string) {
        insertSound(name, path, user, 0);
    }

    setFavorite(name: string, user: string, favorite: boolean) {
        updateFavorite(name, user, favorite);
    }

    getAll(){
        return getAllSounds();
    }

    async getTTS(text: string) {
        try {
            const url = getAudioUrl(text);
            const res = await Axios.get(url, {
                responseType: "arraybuffer"
            });
            const buf = Buffer.from(res.data, 'binary');
            fs.writeFileSync(`uploads/${encodeURIComponent(text)}.mp3`, buf);
        } catch (e) {
            throw e;
        }
    }


}

const controller = new SoundController();

export default controller;
