const knex = require('knex')({
    client: 'postgres',
    connection:{
        host : 'ec2-44-212-250-48.compute-1.amazonaws.com',
        port : 5432,
        user : 'ecjtyfgivvyubn',
        password : '7a9d9a3b1b5a7abe47cb960ef3fcc6646d957c3263f911186a9600bdfe371081',
        database : 'd7iv4osgs6rb5h'
    }
});

module.exports = knex

