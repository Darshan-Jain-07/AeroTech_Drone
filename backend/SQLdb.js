const { createConnection } = require('mysql2');

const connection = createConnection({
    host: "localhost",
    user: "root",
    database: "aerotech",
})

module.exports = connection;


