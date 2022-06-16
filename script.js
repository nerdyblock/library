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
    // createBookDiv(book.name, book.author);
}

function removeFromLibrary() {

}

// function createBookDiv(bookName, author) {
//     let bookDiv = document.createElement('div');
//     container.appendChild(bookDiv);
// }

//create card

// let removeCardButtons = document.querySelectorAll('.remove');

// function createCard(bookNameText, authorNameText, bookPagesText, bookStatusText) {
//     let cardDiv = document.createElement('div');
//     let bookName = document.createElement('h1');
//     let authorName = document.createElement('h2');
//     let bookPages = document.createElement('h3');
//     let bookStatus = document.createElement('h3');
//     let removeCard = document.createElement('button');

//     removeCard.classList.add('.remove');

//     bookName.textContent = bookNameText;
//     authorName.textContent = authorNameText;
//     bookPages.textContent = bookPagesText;
//     bookStatus.textContent = bookStatusText;
//     removeCard.textContent = 'remove';

//     cardDiv.append(bookName, authorName, bookPages, bookStatus, removeCard);
//     cardDiv.classList.add('card');
//     container.appendChild(cardDiv);

//     removeCard.addEventListener('click', () => {
//         removeCard.parentElement.remove();
//     })
//     console.log(removeCardButtons)
// }


// removeCardButtons.forEach(item =>  {
//     item.addEventListener('click', function() {
//         item.parentElement.remove();
//     });
// })

// createCard('mani', 'pal', '23', 'read');
// createCard('ani', 'asdfpal', '123', 'reading');

// remove card


// add book form

document.getElementById('add-book-form').onsubmit = function() {

}

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

