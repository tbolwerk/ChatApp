import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const authenticateJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-s4b0utt5.us.auth0.com/.well-known/jwks.json`
    }),
    audience: process.env.AUTH0_CLIENT_ID,
    issuer: [`https://dev-s4b0utt5.us.auth0.com/`],
    algorithms: ['RS256']
});

