import express from "express";
import { registerAccount } from "./controllers/accountController";
import { Request, Response } from "express";
import multer from "multer";
import soundController from "./controllers/soundController";
const upload = multer({ dest: 'uploads/' })
const app = express();

app.use(express.json())
app.use(express.urlencoded())


app.post("/users/:username/sounds", upload.single("sound"), (req, res) => {
    const { name } = req.body;
    soundController.save(name, req.file.filename, req.params.username);
    const file = req.file;
    res.send(file);
    // res.end();
});

app.get("/user/:username/sounds", (req, res) => {
    soundController.get(req.params.username);
    res.end();
})

app.post("/register", (req: Request, res: Response) => {
    registerAccount(req.body.username, req.body.password);
    res.end();
});

app.listen(3000, () => {
    // tslint:disable-next-line: no-console
    console.log("Server running on port 3000");
});
