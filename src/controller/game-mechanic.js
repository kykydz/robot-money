'use strict';

const { Router } = require('express');

class GameMechanicController {
    constructor(gameMechanicService) {
        this.gameMechanicService = gameMechanicService;

        this.router = Router();
        this.router.post('/', this.login.bind(this));
    }

    async login(req, res, next) {
        return res.status(200).json('ok')
    }
}

module.exports = GameMechanicController;