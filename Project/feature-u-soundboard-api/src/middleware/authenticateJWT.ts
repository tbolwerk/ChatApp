import {NextFunction, Request, RequestHandler, Response} from "express";
import jwt from 'jsonwebtoken';
import {IUser} from "../interfaces/IUser";
import Axios from "axios";
import {IKey} from "../interfaces/IKey";

const grabJWK = async () => {
    try {
        const endpoint = "https://dev-s4b0utt5.us.auth0.com/.well-known/jwks.json";
        const res = await Axios.get<{ keys: Array<IKey> }>(endpoint);
        const signingKeys = res.data.keys
            .filter((k) =>
                k.use === 'sig' &&
                k.kty === 'RSA' &&
                k.kid &&
                ((k.x5c && k.x5c.length || (k.n && k.e))
            ));
    } catch (e) {
        console.log(e);
    }
}


export const authenticateJWT: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    jwt.verify(token, process.env.AUTH0_SECRET, {
        algorithms: ["RS256"]
    }, (err, user: IUser) => {
        // tslint:disable-next-line: no-console
        console.log(authHeader);
        // tslint:disable-next-line: no-console
        console.log(err);
        // tslint:disable-next-line: no-console
        console.log(err, user);
        req.user = user;
        next();
    });
}
