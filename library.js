const addBookButton = document.getElementById('addBook');
const testBookButton = document.getElementById('test');
const newDiv = document.createElement("div");

const readBookButtons = document.querySelectorAll('.readBut');

let myLibrary = [];

class Book {
  constructor(author,title,pages,read){

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

  
  function addBookToLibrary() {
        let title = document.getElementById("title").value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let readCheck1 = document.getElementById('read').checked;
        let readCheck2 = document.getElementById('notRead').checked;

        if (title == '' || author == '' || pages == '' || (readCheck1 == false && readCheck2 == false)){
            return alert('Please completely fill out form.');
        }
        let read= document.querySelector('input[name="isRead"]:checked').value
        let newBook = new Book(author,title,pages,read);
        myLibrary.push(newBook);
        //console.log(myLibrary);
        document.getElementById("bookInfo").reset();
        showBooks(myLibrary);
   return;
  }
  function showBooks(library){

    const libraryDisplay = document.getElementById('libraryDisplay');
     while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.lastChild);
     }
     let countBooks = 0;
      library.forEach(book => {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delBut');
        deleteButton.setAttribute('data-num',countBooks);
        //deleteButton.addEventListener('click',deleteBook());
        const readButton = document.createElement('button');
        readButton.classList.add('readBut');
        readButton.innerHTML='Read?';
        readButton.setAttribute('data-num',countBooks);
        
        const newBook = document.createElement("div");
        const newTitle = document.createElement("div");
        newTitle.classList.add('bookInfo','titleLoc');
        const newAuthor = document.createElement("div");
        newAuthor.classList.add('bookInfo', 'authorLoc');
        const newPages = document.createElement("div");
        newPages.classList.add('bookInfo','pagesLoc');
        const newRead = document.createElement("div");
        newRead.classList.add('bookInfo', 'readLoc');
        let title = book.title;
        let author = book.author;
        let pages = book.pages;
        let isRead = book.read;

        newTitle.innerHTML = 'Title: '+title;
        newAuthor.innerHTML = 'Author: '+author;
        newPages.innerHTML = 'Pages: ' +pages;
        if (isRead === 'true'){
            newRead.innerHTML = 'I have read.'
        }
        else{
            newRead.innerHTML = "I have not read."
        }
    
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newRead);
        newBook.appendChild(deleteButton);
        newBook.appendChild(readButton);
        newBook.classList.add('bookDisplay')

        document.getElementById('libraryDisplay').appendChild(newBook);
        countBooks += 1;
      })

      setButtons(); 
  }
  function testBooks(){
      let bookTest = new Book('test','test2','test3','true');
      //console.log(bookTest);
      for(i = 0; i < 20; i++){
        myLibrary.push(bookTest);
      }
      //console.log(myLibrary);
      showBooks(myLibrary);
      return;
  }

  function setButtons(){
    const deleteBookButtons = document.querySelectorAll('.delBut');
    const readBookButtons = document.querySelectorAll('.readBut');
      deleteBookButtons.forEach(button => {
        button.addEventListener('click',deleteBook);
      })
      readBookButtons.forEach(button =>{
        button.addEventListener('click',changeRead);
      })
  }

  function changeRead(e){
    let num = e.target.getAttribute('data-num');
    console.log(num);
    console.log(myLibrary[num].read);

    if (myLibrary[num].read == 'true'){
        myLibrary[num].read = 'false'
    }
    else{
        myLibrary[num].read = 'true'
    }
    showBooks(myLibrary);
  }
  function deleteBook(e){
      let num = e.target.getAttribute('data-num');
      myLibrary.splice(num,1);
      showBooks(myLibrary);
      return;
  }
addBookButton.addEventListener('click', addBookToLibrary);
testBookButton.addEventListener('click', testBooks);


