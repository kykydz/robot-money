class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    async login(data) {
        const userData = {
            userId: data.userId,
            created: new Date().toISOString(),
            ...data
        }

        const result = await this.repository.update(userData);
        return result;
    }

    async saveScore(data) {
        const userData = {
            userId: data.userId,
            movementHistories: data.movementHistories,
            totalMoneyFound: data.totalMoneyFound,
        }

        const result = await this.repository.update(userData);
        return result;
    }
}

module.exports = UserService;