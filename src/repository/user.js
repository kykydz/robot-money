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

        // find record of user
        const userDataIdx = currentData.findIndex(user => user['userId'] === newData.userId);
        if (userDataIdx == -1) {
            // if not found create new record
            currentData.push(newData);

            // commit
            this.models.writeAll(currentData);

            return newData;
        } else {
            // if found update data index[i]
            const updatedData =  {
                userId: currentData[userDataIdx].userId,
                movementHistories: newData.movementHistories || currentData[userDataIdx].movementHistories || [],
                totalMoneyAvailable: newData.totalMoneyAvailable || currentData[userDataIdx].totalMoneyAvailable || 0,
                totalMoneyFound: newData.totalMoneyFound || currentData[userDataIdx].totalMoneyFound || 0,
                interestRate: newData.interestRate || currentData[userDataIdx].interestRate || 0,
                updated: new Date().toISOString()
            }
            currentData[userDataIdx] = updatedData;
            
            // commit
            this.models.writeAll(currentData);

            return currentData[userDataIdx]
        }
        
        
    }
}

module.exports = UserRepository