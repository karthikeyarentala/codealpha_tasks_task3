let books = [];

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    
    if (title && author) {
        books.push({ title, author, category });
        updateBookList();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
    } else {
        alert("Please enter both title and author.");
    }
}

function updateBookList() {
    const bookCollection = document.getElementById("bookCollection");
    bookCollection.innerHTML = "";
    books.forEach((book, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${book.title}</strong> by ${book.author} (${book.category})
                              <button onclick="removeBook(${index})">Remove</button>`;
        bookCollection.appendChild(listItem);
    });
}

function removeBook(index) {
    books.splice(index, 1);
    updateBookList();
}

function searchBooks() {
    const query = document.getElementById("search").value.toLowerCase();
    const bookCollection = document.getElementById("bookCollection");
    bookCollection.innerHTML = "";
    books.filter(book => book.title.toLowerCase().includes(query) || 
                         book.author.toLowerCase().includes(query) ||
                         book.category.toLowerCase().includes(query))
         .forEach((book, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${book.title}</strong> by ${book.author} (${book.category})
                                  <button onclick="removeBook(${index})">Remove</button>`;
            bookCollection.appendChild(listItem);
         });
}