class Book {
    constructor (name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

let myLibrary = [];

let container = document.querySelector('.container');

function addToLibrary() {
    let bookName = prompt('enter bookname');
    let author = prompt('author');
    let pages = prompt('pages');
    let bookStatus = prompt('bookstatus');
    let book = new Book(bookName, author, pages, bookStatus);
    myLibrary.push(book);
    createBookDiv(book.name, book.author);
}

function removeFromLibrary() {

}

function createBookDiv(bookName, author) {
    let bookDiv = document.createElement('div');
    container.appendChild(bookDiv);
    bookDiv.textContent = bookName + '---' + author;
}
