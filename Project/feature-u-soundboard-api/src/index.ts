import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";
import { registerAccount } from "./controllers/accountController";
import { Request, Response } from "express";
import multer from "multer";
import soundController from "./controllers/soundController";
const upload = multer({ dest: 'uploads/' })
import config from "./dotenv.config";
import cors from 'cors';
import {authenticateJWT} from "./middleware/authenticateJWT";
import path from "path";

const port = config.port || 3000;

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(express.static('uploads'))

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded());


app.post("/sounds", authenticateJWT, upload.single("sound"), (req, res) => {
    const { name } = req.body;
    if (req.file) {
        soundController.save(name, req.file.filename, req.user.email);
        return res.json({
            message: "Uploaded."
        })
    }
    res.status(400).json({
        message: "Missing name or sound."
    });
});

app.get("/sounds", authenticateJWT, (req: Request, res: Response) => {
    soundController.get(req.user.email)
        .then((data) => res.json(data))
})

app.post("/register", (req: Request, res: Response) => {
    registerAccount(req.body.username, req.body.password);
    res.end();
});

app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Server running on port ${port}`);
});
