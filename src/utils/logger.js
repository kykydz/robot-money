'use strict';

const fs = require('fs');
const { SERVICE_NAME, LOG_LOCATION } = require('../config');

const logLocation = LOG_LOCATION;
const fileName = SERVICE_NAME;

class Logger {
    constructor(env) {
        this.log = console.log;
        this.env = env;
        this.fileStream = function (data) {
            if (env !== 'production') {
                if (!fs.existsSync(logLocation)) {
                    fs.mkdirSync(logLocation);
                }
                return fs.appendFileSync(`${logLocation}` + `/${fileName}`, data + '\n');
            }

            return null;
        };
    }

    info(message, context) {
        const data = JSON.stringify({
            level: 'info',
            timestamp: new Date(),
            message,
            context
        });

        this.fileStream(data);
        this.log(data);

        return null;
    }

    error(message, context, err) {

        const data = JSON.stringify({
            level: 'error',
            timestamp: new Date(),
            message,
            context
        });

        this.fileStream(data);
        this.log(data);

        return null;
    }
}


module.exports = Logger;