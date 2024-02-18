function getComputerChoice() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r,g,b]
}


getComputerChoice()

const container = document.querySelector(".container");
for ( let i = 0; i <= 557; i++) {
const div = document.createElement('div');
div.classList.add("box");
container.appendChild(div);
let [r,g,b] = getComputerChoice();
div.addEventListener("mouseover", () => {
div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
} ) 
}
