import {getSounds, insertSound, getAllSounds, updateFavorite} from "../dataAccess/soundDAO";

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
}

const controller = new SoundController();

export default controller;
