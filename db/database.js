const {Sequalize} = require('sequelize');

const dbConnection = process.env.DATABASE_URL;
let database = undefined;

function getDatabase() {
    if(!database) {
        console.info('Creating and returning new database instance');
        database = new Sequalize(dbConnection);
    }else {
        console.info('Returning pre-existing database');
        return database;
    }
}

module.exports = {
    get: getDatabase()
}