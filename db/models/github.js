
const {Sequelize} = require('sequelize');

module.exports = (database) => {
    const GithubUser = database.define('github', {
        id: {
            type: Sequelize.INTEGER
        },
        discorduserid: {
            type: Sequelize.INTEGER
        },
        username: {
          type: Sequelize.STRING
        }
      });

    return GithubUser;
}