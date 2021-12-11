import useDb from "./database";

export const insertSound = (name: string, path: string, username: string, favorite: number) => {
    useDb((db) => {
        const stmt = db.prepare("INSERT INTO sounds VALUES (?, ?, ?, ?)");
        stmt.run([name, path, username, favorite]);
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
export const updateFavorite = (name: string, user: string, favorite: boolean) => {
    useDb((db) => {
        const stmt = db.prepare("UPDATE sounds SET favorite = ? WHERE user = ? AND name = ?");
        stmt.run([favorite ? 1 : 0, user, name]);
        stmt.finalize();
    });
}
