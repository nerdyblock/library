class Book {
    constructor (name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

class Library {
    constructor () {
        this.books = [];
    }

    updateLibrary(book) {
        this.books.push(book);
    }
    
    isInLibrary(book) {
        return this.books.some(item => item.name === book.name);
    }
     
    removeFromLibrary(book) {
        this.books = this.books.filter(item => item.name != book.name);
    }
}

let library = new Library();

// let myLibrary = [];

const container = document.querySelector('.book-container');

function addToLibrary() {
    const book = getbook();

    // console.log(library)
    if(library.isInLibrary(book)) {
        alert('This Book Already Exists In Your Library');
        return;
    }
    library.updateLibrary(book);
    console.log(library.books);
    // let book = new Book(bookName, author, pages, bookStatus);
    
    createCard(book);
    // myLibrary.push(book);
    // console.log(myLibrary)
}

// function removeFromLibrary(bookName) {
//     myLibrary = myLibrary.filter(item => {
//         if(item.name !== bookName) {
//             return true;
//         }
//     })
//     console.log(myLibrary);
// }

//create card

// let removeCardButtons = document.querySelectorAll('.remove');

function createCard(book) {
    const cardDiv = document.createElement('div');
    const bookName = document.createElement('h1');
    const authorName = document.createElement('h2');
    const bookPages = document.createElement('h3');
    const bookStatus = inputStatus.cloneNode(true);
    const removeCard = document.createElement('button');

    removeCard.classList.add('.remove');

    bookName.textContent = book.name;
    authorName.textContent = book.author;
    bookPages.textContent = `${book.pages} pages`;
    bookStatus.value = book.status.toLowerCase();
    removeCard.textContent = 'Remove';

    cardDiv.append(bookName, authorName, bookPages, bookStatus, removeCard);
    cardDiv.classList.add('card');
    container.appendChild(cardDiv);

    bookStatus.addEventListener('click', () => {
        book.status = bookStatus.options[bookStatus.selectedIndex].text;
    });

    removeCard.addEventListener('click', () => {
        removeCard.parentElement.remove();
        library.removeFromLibrary(book);
        updateLibrary();
    });

    updateLibrary();
}

const booksCount = document.querySelector('[data-books]');
const readCount = document.querySelector('[data-read]');
const readingCount = document.querySelector('[data-reading]');
const wantToReadCount = document.querySelector('[data-want-to-read]');

function updateLibrary() {
    booksCount.textContent = library.books.length;

    let readCounter = 0;
    let readingCounter = 0;
    let wantToCounter = 0;

    library.books.forEach(item => {
        if(item.status.toLowerCase() === 'read')  {
            readCounter++;
        }
        else if(item.status.toLowerCase() === 'reading') {
            readingCounter++;
        }
        else {
            wantToCounter++;
        }
    });

    readCount.textContent = readCounter;
    readingCount.textContent = readingCounter;
    wantToReadCount.textContent = wantToCounter;
}
//update library


// removeCardButtons.forEach(item =>  {
//     console.log(item);
//     item.addEventListener('click', function() {
//         console.log('working')
//         item.parentElement.remove();
//     });
// })


// add book form

// function updateGrid() {
    // 
    // library.books.forEach()
// }

document.getElementById('add-book-form').onsubmit = function(e) {
    e.preventDefault();
    addToLibrary();

    //updateGrid()

    //let book = getBook()
    // library.isInLibrary() ?"book already exists" : library.updateBook(book)
    // addToLibrary(
    //     inputBookName.value, 
    //     inputAuthorName.value, 
    //     inputPages.value, 
    //     inputStatus.options[inputStatus.selectedIndex].text);
    closeForm();
}

function getbook() {
    return new Book (
        inputBookName.value, 
        inputAuthorName.value, 
        inputPages.value, 
        inputStatus.options[inputStatus.selectedIndex].text);
}

const inputBookName = document.getElementById('name')
const inputAuthorName = document.getElementById('author')
const inputPages= document.getElementById('pages')
const inputStatus = document.getElementById('status')

const addBookCard = document.getElementById('add-book');
const closeFormButton = document.querySelector('[data-close-button]');
const overlay = document.querySelector('.overlay');
const addBookForm = document.querySelector('.form-container');

addBookCard.addEventListener('click', openForm)

closeFormButton.addEventListener('click', closeForm);

overlay.addEventListener('click', closeForm);

function openForm() {
    overlay.classList.add('active');
    addBookForm.classList.add('active');
}

function closeForm() {
    overlay.classList.remove('active');
    addBookForm.classList.remove('active');
}

