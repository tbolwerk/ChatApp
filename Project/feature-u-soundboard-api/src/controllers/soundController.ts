import {getSounds, insertSound} from "../dataAccess/soundDAO";

class SoundController {
    get(username:string) {
        return getSounds(username);
    }

    save(name: string, path: string, user: string) {
        insertSound(name, path, user);
    }
}

const controller = new SoundController();

export default controller;
