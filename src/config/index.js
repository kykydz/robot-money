require('dotenv').config();

module.exports = {
    SERVICE_NAME: require('../../package.json').name,
    SERVER_PORT: process.env.SERVER_PORT || 80,
    ENV: process.env.NODE_ENV || 'local',
    LOG_LOCATION: process.env.LOG_LOCATION || 'logs/'
}