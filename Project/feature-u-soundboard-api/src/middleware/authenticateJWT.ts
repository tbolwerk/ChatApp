import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const authenticateJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER}/.well-known/jwks.json`
    }),
    audience: process.env.AUTH0_CLIENT_ID,
    issuer: [`${process.env.AUTH0_ISSUER}/`],
    algorithms: ['RS256']
});

