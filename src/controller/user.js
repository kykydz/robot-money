const { Router } = require('express');

class UserController {
    constructor(userService) {
        this.userService = userService;

        this.router = Router();
        this.router.post('/', this.login.bind(this));
    }

    async login(req, res, next) {
        return res.status(200).json('ok')
    }
}

module.exports = UserController;