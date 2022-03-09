
/*const http = require('http');
const app = require('./app.js');

const port = process.env.PORT || 80;

const server = http.createServer(app);

server.listen(port);*/

const mysql = require('mysql2');

const db = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'Drm71vmm77',
    database: 'universal_contacts'
})
console.log("You are now connected to the database.");

