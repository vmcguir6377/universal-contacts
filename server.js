
const express = require('express');
const path = require('path');
app.use(express.static(path.join(__dirname, './')));

const PORT = 80;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});


const mysql = require('mysql2');

const db = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'Drm71vmm77',
    database: 'universal_contacts'
})
console.log("You are now connected to the database.");

