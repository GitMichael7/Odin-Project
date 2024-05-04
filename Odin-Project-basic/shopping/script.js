const btn = document.querySelector('button');
const ul = document.querySelector("ul");


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
        ul.removeChild(content);
    }

    
    ul.appendChild(content);

}



