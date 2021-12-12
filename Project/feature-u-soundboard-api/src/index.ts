import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";
import { Request, Response } from "express";
import multer from "multer";
import soundController from "./controllers/soundController";
const upload = multer({ dest: 'uploads/' })
import config from "./dotenv.config";
import cors from 'cors';
import {authenticateJWT} from "./middleware/authenticateJWT";

const port = config.port || 3000;

const app = express();

const allowedOrigins = ['http://localhost:3000', '*'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(express.static('uploads'))

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded());

app.post("/tts", authenticateJWT, async (req, res) => {
    try {
        const file = await soundController.createTTS(req.body.text);
        await soundController.save(req.body.text, file, req.user.email);
        res.status(201).end();
    } catch (e) {
        console.error(e);
        res.status(500).json({
            error: e
        })
    }
});

app.post("/sounds", authenticateJWT, upload.single("sound"), async (req: Request, res: Response) => {
    const { name } = req.body;
    if (req.file) {
        await soundController.save(name, req.file.filename, req.user.email);
        res.status(201).end();
    } else {
        res.status(400).json({
            message: "Missing name or sound."
        });
    }
});

app.get("/sounds", authenticateJWT, async (req: Request, res: Response) => {
    const data = await soundController.get(req.user.email);
    res.json(data);
})

app.put("/sounds/favorite", authenticateJWT, async (req: Request, res: Response) => {
    const { name, favorite } = req.body;
    await soundController.setFavorite(name, req.user.email, favorite)
    res.status(200).end();
});

app.get("/allsounds", async (req: Request, res: Response) => {
    await soundController.getAll().then((data) => res.json(data));
})

app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Server running on port ${port}`);
});

