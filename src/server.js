'use strict';

const express = require('express');

const { createApp } = require('./app');
const { SERVER_PORT, ENV } = require('./config');
const Logger = require('../src/utils/logger');

(async () => {
    const app = express();
    const logger = new Logger(ENV);

    await createApp(app);

    const server = app.listen(SERVER_PORT);

    logger.info(`Server is start listening at port: ${SERVER_PORT}`, {});

    return server;
})();