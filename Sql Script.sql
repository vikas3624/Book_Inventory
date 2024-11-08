USE book_inventory;
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    publicationYear INT,
    pages INT,
    isbn VARCHAR(13),
    price DECIMAL(10, 2),
    quantity INT DEFAULT 1
);

INSERT INTO books (title, author, genre, publicationYear, pages, isbn, price, quantity)
VALUES 
('To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960, 281, '9780061120084', 7.99, 12),
('1984', 'George Orwell', 'Dystopian', 1949, 328, '9780451524935', 9.99, 8),
('Pride and Prejudice', 'Jane Austen', 'Romance', 1813, 279, '9781503290563', 6.99, 15),
('The Catcher in the Rye', 'J.D. Salinger', 'Classic', 1951, 214, '9780316769488', 8.99, 10),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937, 310, '9780547928227', 10.99, 5);




