import useDb from "./database";

export const insertSound = (name: string, path: string, username: string) => {
    useDb((db) => {
        const stmt = db.prepare("INSERT INTO sounds VALUES (?, ?, ?)");
        stmt.run([name, path, username]);
        stmt.finalize();
    });
}

export const getSounds = (user: string) => {
    return new Promise((resolve) => {
        useDb((db) => {
            db.all("SELECT * FROM sounds WHERE user = ?", [user], (err, rows) => {
                resolve(rows);
            })
        });
    });
}

export const getAllSounds = () => {
    return new Promise((resolve) => {
        useDb((db) => {
            db.all("SELECT * FROM sounds", [], (err, rows) => {
                resolve(rows);
            })
        })
    })
}
