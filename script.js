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
     
    removeFromLibrary(bookName) {
        this.books.filter(item => item.name != bookName);
    }
}

let library = new Library();

// let myLibrary = [];

let container = document.querySelector('.container');

function addToLibrary() {
    let book = getbook();

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
    let cardDiv = document.createElement('div');
    let bookName = document.createElement('h1');
    let authorName = document.createElement('h2');
    let bookPages = document.createElement('h3');
    let bookStatus = document.createElement('h3');
    let removeCard = document.createElement('button');

    removeCard.classList.add('.remove');

    bookName.textContent = book.name;
    authorName.textContent = book.author;
    bookPages.textContent = book.pages;
    bookStatus.textContent = book.status;
    removeCard.textContent = 'remove';

    cardDiv.append(bookName, authorName, bookPages, bookStatus, removeCard);
    cardDiv.classList.add('card');
    container.appendChild(cardDiv);

    removeCard.addEventListener('click', () => {
        removeCard.parentElement.remove();
        library.removeFromLibrary(bookNameText);
    });
}


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

let inputBookName = document.getElementById('name')
let inputAuthorName = document.getElementById('author')
let inputPages= document.getElementById('pages')
let inputStatus = document.getElementById('status')

const addBookButton = document.querySelector('.add-book');
const closeFormButton = document.querySelector('[data-close-button]');
const overlay = document.querySelector('.overlay');
const addBookForm = document.querySelector('.form-container');

addBookButton.addEventListener('click', openForm);

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

