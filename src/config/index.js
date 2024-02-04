require('dotenv').config();

module.exports = {
    SERVICE_NAME: require('../../package.json').name,
    DB: process.env.GAME_DB_HOST || 'game-db.json',
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    ENV: process.env.NODE_ENV || 'local',
    LOG_LOCATION: process.env.LOG_LOCATION || 'logs/'
}