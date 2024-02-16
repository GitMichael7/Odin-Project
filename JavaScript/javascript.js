const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);

//

const hthree = document.createElement("h3");
hthree.textContent = "Hey I'm a blue h3!";
hthree.style.color = "blue";

container.appendChild(hthree);

//

const div = document.createElement("div");
div.textContent = "Hey I'm a blue h3!";
div.style.backgroundColor = "pink";
div.style.borderColor = "black";



//

const hone = document.createElement("h1");
hone.textContent = "I'm in a div";

div.appendChild(hone);

//
const ptwo = document.createElement("p");
ptwo.textContent = "MEE TOO";

div.appendChild(ptwo);


container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
