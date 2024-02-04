const fs = require('fs');
const { SERVICE_NAME } = require('../../config');

class UserModelsAbstraction {
    constructor (jsonPath) {
        this.db = jsonPath;
    }

    _base(data) {
        return {
            service: SERVICE_NAME,
            users: data || []
        }
    }

    initDB() {
        // check if there is existing DB
        if (fs.existsSync(this.db)) {
                
            // check if there is content inside
            const content = this.readAll();
            if (content.length > 0) {
                return;
            }
        }

        return fs.writeFileSync(this.db, JSON.stringify(this._base()));
    }

    readAll() {
        // return array of user profile detial
        return JSON.parse(fs.readFileSync(this.db, {
            encoding: 'utf-8'
        })).users;
    }

    writeAll(data) {
        return fs.writeFileSync(this.db, JSON.stringify(this._base(data)));
    }
}

module.exports = UserModelsAbstraction;