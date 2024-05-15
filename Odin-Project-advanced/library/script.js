const myLibrary = [];
const New = document.querySelector(".new");


function Book(name, title, pages, read ) {
this.name = name;
this.title = title;
this.pages = pages;
this.read = read;
}

function addBookToLibrary(book) {
 myLibrary.push(book)
}


New.addEventListener("click", () => { 
  const previousForm = document.querySelector("#myForm");
  if (previousForm) {
    previousForm.remove();
  }

  const form = document.createElement("form");
  form.id = "myForm";

  const name = document.createElement("input");
  name.type = "text";
  name.placeholder = "Who is the author?";
  form.appendChild(name);

  const title = document.createElement("input");
  title.type = "text";
  title.placeholder = "What is the book called?";
  form.appendChild(title);

  const pages = document.createElement("input");
  pages.type = "text";
  pages.placeholder = "How many pages?";
  form.appendChild(pages);

  const read = document.createElement("input");
  read.type = "text";
  read.placeholder = "Have you read it?";
  form.appendChild(read);

  // Create input for submit button
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';

// Append the submit button to the form
  form.appendChild(submitButton);

  document.body.appendChild(form);


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    

    const nameData = name.value;
    const titleData = title.value;
    const pagesData = pages.value;
    const readData = read.value;

    console.log(nameData)
    console.log(titleData)
    console.log(pagesData)
    console.log(readData)

    const newBook = new Book(nameData, titleData, pagesData, readData)
    addBookToLibrary(newBook)
    console.log(myLibrary);
    form.reset();
  })
})
