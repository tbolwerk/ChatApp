import useDb from "./database";

export const insertSound = (name: string, path: string, username: string) => {
    useDb((db) => {
        const stmt = db.prepare("INSERT INTO sounds VALUES (?, ?, ?)");
        stmt.run([name, path, username]);
        stmt.finalize();
    });
}

export const getSounds = (username: string) => {
    return new Promise((res) => {
        useDb((db) => {
            const stmt = db.prepare("SELECT * FROM sounds WHERE username = ?");
            stmt.run([username], (result => {
                // tslint:disable-next-line: no-console
                console.log(result);
            }));
            stmt.finalize();
        });
    });

}
