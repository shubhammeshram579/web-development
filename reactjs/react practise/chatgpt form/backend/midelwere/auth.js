const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)

        if (!token) return res.status(403).json({ message: 'Authentication token missing' });

        const decodedData = jwt.verify(token, 'secret');
        req.userId = decodedData?.id;

        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = auth;
