const GameMechanicController = require('./controller/game-mechanic');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const setupRoutes = async (app) => {
    const gameMechanicController = new GameMechanicController();

    app.use(express.static('public'));
    app.get('/', (_, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.use('/api/game-mechanic/login', gameMechanicController.login);

    app.use('*', (req, res) => {
        res.status(401).send('Unauthorized');
    });
}

module.exports.createApp = async (app) => {
    await setupRoutes(app);

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
}