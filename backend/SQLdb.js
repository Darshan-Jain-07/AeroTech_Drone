const { createConnection } = require('mysql2');

const connection = createConnection({
    host: "infinityfree.com",
    user: "if0_34856207",
    database: "if0_34856207_aerotech",
})

module.exports = connection;


