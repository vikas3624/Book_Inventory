const apiUrl = 'http://localhost:3000/api';

async function addBook() {
    const bookData = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        publicationYear: document.getElementById('publicationYear').value, 
        pages: document.getElementById('pages').value,
        isbn: document.getElementById('isbn').value,
        price: document.getElementById('price').value,
        quantity: document.getElementById('quantity').value
    };

    try {
        const response = await fetch(`${apiUrl}/addBook`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });

        if (response.ok) {
            alert("Book added successfully");
            // Optionally reset the form fields after successful submission
            document.getElementById('addBookForm').reset();
        } else {
            const errorData = await response.json();
            alert(`Error adding book: ${errorData.message}`);
        }
    } catch (error) {
        alert("An error occurred while adding the book.");
        console.error('Error:', error);
    }
}


async function filterBooks() {
    const author = document.getElementById('filter-author').value;
    const genre = document.getElementById('filter-genre').value;

    try {
        const response = await fetch(`${apiUrl}/books?author=${author}&genre=${genre}`);

        if (!response.ok) {
            const errorData = await response.json();
            alert(`Error fetching books: ${errorData.message}`);
            return;
        }

        const books = await response.json();

        // Clear previous results
        const table = document.getElementById('books-table');
        table.innerHTML = ''; // Clear existing rows

        // Insert a header row if needed
        const headerRow = table.insertRow();
        headerRow.innerHTML = `
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publication Year</th>
            <th>ISBN</th>
        `;

        // Check if books are found
        if (books.length === 0) {
            const emptyRow = table.insertRow();
            emptyRow.innerHTML = '<td colspan="5">No books found matching the criteria. Please Enter the valid data</td>';
            return;
        }

        // Display books
        books.forEach(book => {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.publicationYear}</td>
                <td>${book.isbn}</td>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching books.');
    }
}


function exportBooks() {
    window.location.href = `${apiUrl}/exportBooks`;
}
