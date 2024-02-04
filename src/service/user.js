class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    async login(data) {
        const userData = {
            userId: data.userId,
            created: new data()
        }

        const result = await this.repository.update(userData);
        return res.status(200).json(result);
    }

    async saveScore(data) {
        // find user
        const user = this.repository.getUserById({
            where: {
                userId: data.userId
            }
        });
        if (!user) {
            throw new Error('You must login to be able to save score!');
        }

        const userData = {
            userId: data.userId,
            movementHistories: data.movementHistories,
            totalMoneyAvailable: data.totalMoneyAvailable,
            totalMoneyFound: data.totalMoneyFound,
            interestRate: data.interestRate
        }

        const result = await this.repository.update(userData);
        return res.status(200).json(result);
    }
}

module.exports = UserService;