const knex = require('knex')({
    client: 'pg',
    connection:{
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PWD,
        database : process.env.DB_DB,
        ssl: {rejectUnauthorized: false}
    }
});

module.exports = knex

