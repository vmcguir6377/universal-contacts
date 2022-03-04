const mysql = require('mysql2');

const db = mysql.createConnection( {
    host: 'localhost',
    user: 'sa',
    password: 'ulsdbadmin',
    database: 'universal_contacts'
})
console.log("You are now connected to the database."),

