class UserRepository {
    constructor (models) {
        this.models = models;
    }

    getUserById(query) {
        let result;
        try {
            result = this.models.readAll()[query.where.userId];
        } catch (error) {
            throw new Error('get user failed');
        }
        return result;
    }

    update(newData) {
        const currentData = this.models.readAll();
        
        newData.updated = new Date();
        currentData.push(newData);
        
        // commit
        return this.models.writeAll(currentData);
    }
}

module.exports = UserRepository