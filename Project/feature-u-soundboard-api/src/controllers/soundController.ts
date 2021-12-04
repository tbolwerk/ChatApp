import {getSounds, insertSound, getAllSounds} from "../dataAccess/soundDAO";

class SoundController {
    get(username:string) {
        return getSounds(username);
    }

    save(name: string, path: string, user: string) {
        insertSound(name, path, user);
    }

    getAll(){
        return getAllSounds();
    }
}

const controller = new SoundController();

export default controller;
