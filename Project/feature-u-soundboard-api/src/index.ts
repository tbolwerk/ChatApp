import express from "express";
import { registerAccount } from "./controllers/accountController";
import { Request, Response } from "express";

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.post("/register", (req: Request, res: Response) => {
    registerAccount(req.body.username, req.body.password);
    res.end();
});

app.listen(3000, () => {
    // tslint:disable-next-line: no-console
    console.log("Server running on port 3000");
});