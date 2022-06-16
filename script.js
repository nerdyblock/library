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

function addToLibrary(bookName,  author, pages, bookStatus) {
    let book = new Book(bookName, author, pages, bookStatus);
    createCard(bookName, author, pages, bookStatus);
    myLibrary.push(book);
    console.log(myLibrary)
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

function createCard(bookNameText, authorNameText, bookPagesText, bookStatusText) {
    let cardDiv = document.createElement('div');
    let bookName = document.createElement('h1');
    let authorName = document.createElement('h2');
    let bookPages = document.createElement('h3');
    let bookStatus = document.createElement('h3');
    let removeCard = document.createElement('button');

    removeCard.classList.add('.remove');

    bookName.textContent = bookNameText;
    authorName.textContent = authorNameText;
    bookPages.textContent = bookPagesText;
    bookStatus.textContent = bookStatusText;
    removeCard.textContent = 'remove';

    cardDiv.append(bookName, authorName, bookPages, bookStatus, removeCard);
    cardDiv.classList.add('card');
    container.appendChild(cardDiv);

    removeCard.addEventListener('click', () => {
        removeCard.parentElement.remove();
        removeFromLibrary(bookNameText);
    })
}


// removeCardButtons.forEach(item =>  {
//     console.log(item);
//     item.addEventListener('click', function() {
//         console.log('working')
//         item.parentElement.remove();
//     });
// })


// add book form

document.getElementById('add-book-form').onsubmit = function(e) {
    e.preventDefault();
    addToLibrary(
        inputBookName.value, 
        inputAuthorName.value, 
        inputPages.value, 
        inputStatus.options[inputStatus.selectedIndex].text);
    closeForm();
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

