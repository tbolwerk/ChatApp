import useDb from "./database"

export let insertAccount = (username: string, password: string) => {
    useDb((db) => {
        const stmt = db.prepare("INSERT INTO accounts VALUES (?, ?)")
        stmt.run([username, password]);

        stmt.finalize();
    })
}