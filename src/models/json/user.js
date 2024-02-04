const fs = require('fs');

class UserModelsAbstraction {
    constructor (jsonPath) {
        this.db = jsonPath;
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

        return fs.writeFileSync(this.db, JSON.stringify('[]'));
    }

    readAll() {
        // return array of user profile detial
        return fs.readFileSync(this.db, {
            encoding: 'utf-8'
        });
    }

    writeAll(data) {
        return fs.writeFileSync(this.db, JSON.stringify(data));
    }
}

module.exports = UserModelsAbstraction;