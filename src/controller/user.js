const { Router } = require('express');

class UserController {
    constructor(userService) {
        this.userService = userService;

        this.router = Router();
        this.router.post('/login', this.login.bind(this));
        this.router.post('/save-score', this.saveScore.bind(this));
    }

    async login(req, res) {
        const generatedUserId = req.session;

        const result = await this.userService.login({
            userId: generatedUserId,
            ...req.body
        });
        return res.status(200).json(result)
    }

    async saveScore(req, res) {
        const generatedUserId = req.session;

        const result = await this.userService.saveScore({
            userId: generatedUserId,
            ...req.body
        });
        return res.status(200).json(result)
    }
}

module.exports = UserController;