import {getSounds, insertSound} from "../dataAccess/soundDAO";
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
        insertSound(name, path, user);
    }

    async getTTS(text: string) {
        try {
            const url = getAudioUrl(text);
            const res = await Axios.get(url, {
                responseType: "arraybuffer"
            });
            console.log(url)
            console.log(typeof res.data)
            // const stream = fs.createWriteStream("test.mp3");
            // const blob = new Blob([res.data], {
            //     type: 'audio/mpeg'
            // });
            // stream.write(res.data);
            // stream.end();
            const buf = Buffer.from(res.data, 'binary');
            fs.writeFileSync(`${encodeURIComponent(text)}.mp3`, buf);
        } catch (e) {
            throw e;
        }
    }


}

const controller = new SoundController();

export default controller;
