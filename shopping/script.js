const btn = document.querySelector('button');
const ul = document.querySelector("ul");


const listText = document.createElement('span');
const listBtn = document.createElement('button');

btn.onclick = () => {
    const inputElement = document.getElementById("item");
    const inputValue = inputElement.value;
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    
    const content = document.createElement('li');
    content.appendChild(listText);
    content.appendChild(listBtn);
    listBtn.textContent = "Delete";
    listText.textContent = inputValue;

    listBtn.onclick = () => {
        listText.textContent = "";
    }

    
    ul.appendChild(content);

}



