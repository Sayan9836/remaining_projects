
const jwt = require('jsonwebtoken');
const { secret } = require('../utils/constants');

function authenticate(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        console.log(decoded);
        req.user = decoded;
        next();
    });
}

module.exports = authenticate;