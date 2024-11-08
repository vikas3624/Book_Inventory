const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ARchitect@49',
    database: 'book_inventory'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = connection;
