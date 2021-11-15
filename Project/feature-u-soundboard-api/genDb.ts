import sqlite3 from "sqlite3";
import { DB_FILE } from "./src/dataAccess/database";

const initDb = () => {
    const db = new sqlite3.Database(DB_FILE);

    initTables(db);
}

const initTables = (db: sqlite3.Database) => {
    db.run("CREATE TABLE accounts (username TEXT, password TEXT)");
}

initDb();