import sqlite3 from "sqlite3"

export const DB_FILE = "soundboard.db"

const useDb = (fn: (db: sqlite3.Database) => any) => {
    const db = new sqlite3.Database(DB_FILE);

    const result = fn(db);

    db.close()

    return result;
}

export default useDb