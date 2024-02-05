const { response, request } = require('express');
const { ENV } = require('../config');
const Logger = require('../utils/logger');
const { uuid } = require('uuidv4');


const logger = new Logger(ENV);

const requestLogger = async (req, res, next) => {
    const currentReqUUID = uuid();
    logger.info('Incoming request', {
        content: {
            path: req.path,
            headers: req.headers,
            content: req.body
        },
        requestUUID: currentReqUUID
    })

    const originalJsonMethod = res.json;

    res.json = (responseData) => {
        logger.info('Response request UUID: ', {
            content: responseData,
            requestUUID: currentReqUUID
        });

        return originalJsonMethod.call(res, responseData);
    }

    next();
}

module.exports = requestLogger;