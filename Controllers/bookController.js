const db = require('../Models/book');

// Add a new book
exports.addBook = (req, res) => {
    const { title, author, genre, publicationYear,pages, isbn,price,quantity } = req.body;
    const sql = `INSERT INTO books (title, author, genre, publicationYear,pages, isbn,price,quantity) VALUES (?, ?, ?, ?, ?,?,?,?)`;
    const values = [title, author, genre, publicationYear,pages, isbn,price,quantity];
    
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ message: "Error adding book", error: err });
        res.status(201).json({ message: "Book added successfully", data: { id: result.insertId, ...req.body } });
    });
};

// Get books with filtering
exports.getBooks = (req, res) => {
    let sql = 'SELECT * FROM books WHERE 1=1';
    const values = [];
    for (const [key, value] of Object.entries(req.query)) {
        sql += ` AND ${key} = ?`;
        values.push(value);
    }

    db.query(sql, values, (err, results) => {
        if (err) return res.status(500).json({ message: "Error fetching books", error: err });
        res.json(results);
    });
};

// Export books data
exports.exportBooks = (req, res) => {
    const sql = 'SELECT * FROM books';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ message: "Error exporting books", error: err });
        
        // Export in CSV format
        const csvData = results.map(book => `${Object.values(book).join(',')}`).join('\n');
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="books.csv"');
        res.send(csvData);
    });
};
