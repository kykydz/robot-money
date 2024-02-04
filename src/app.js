const UserController = require('./controller/user');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('./middleware/session');
const UserModelsAbstraction = require('./models/json/user');
const { DB } = require('./config');
const UserRepository = require('./repository/user');

const setupRoutes = async (app) => {
    // init DB (using json file)
    const models = new UserModelsAbstraction(DB);
    models.initDB();

    const userRepository = new UserRepository(models);

    const userController = new UserController();

    app.use(express.static('public'));
    app.get('/', (_, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.use('/api/*', session);
    app.use('/api/game-mechanic/login', userController.login);

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