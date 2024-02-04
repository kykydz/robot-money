const crypto = require('crypto');

const session = async (req, res, next) => {
    const clientIpAddress = req.headers.host; // '192.168.1.164:3000'
    const clientBrowser = req.headers['user-agent']; // 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36'

    const dataToHash = clientIpAddress + clientBrowser;
    const hashedResult = crypto.createHash('sha256').update(dataToHash).digest('hex');
    
    // check session

    req.session = hashedResult;
    
    next(req);
}

module.exports = session;