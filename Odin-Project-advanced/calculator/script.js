/*
Create 4 variables:
1st Num
2nd Num
Operator 
sum

*/
// Query Selectors
const sum = document.querySelector(".sum");
const Backspace = document.querySelector(".Backspace");
const AC = document.querySelector(".AC");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const division = document.querySelector(".division");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const multi = document.querySelector(".multi");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const minus = document.querySelector(".minus");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");
const equals = document.querySelector(".equals");
const plus = document.querySelector(".plus");

let gate = 1;
let operator = 0;

let Num1 = [];
let Num2 = [];





function checkadd(num) {
    if ( gate === 1) {
        Num1.push(num);
        sumnum1 = parseInt(Num1.join(""));
        console.log(sumnum1)
    }
    else {
        Num2.push(num)
        sumnum2 = parseInt(Num2.join(""));
        console.log("nope")
    }
}



division.addEventListener("click", () => {
    gate = 0;
    operator = "division";
  })
multi.addEventListener("click", () => {
    gate = 0;
    operator = "multi";
  })
minus.addEventListener("click", () => {
    gate = 0;
    operator = "minus";
  })
plus.addEventListener("click", () => {
    gate = 0;
    operator = "plus";
  })

equals.addEventListener("click", () => {
    gate = 1;
    if ( operator === "division") {
        total = sumnum1 / sumnum2;
    }
    else if ( operator === "multi") {
        total = sumnum1 * sumnum2
    }
    else if ( operator === "minus") {
        total = sumnum1 - sumnum2 
    }
    else if (operator === "plus") {
        total = sumnum1 + sumnum2 
    }
    else {}
    sum.textContent = total;
    console.log(total)
  })










AC.addEventListener("click", () => {
    total = 0;
    sumnum1 = 0;
    sumnum2 = 0;
    Num1 = [];
    Num2 = [];
    operator = 0;
    gate = 1;
    sum.textContent = total;
})





seven.addEventListener("click", () => {
    checkadd(7)
  })
eight.addEventListener("click", () => {
    checkadd(8)
  })
nine.addEventListener("click", () => {
    checkadd(9)
  })
four.addEventListener("click", () => {
    checkadd(4)
  })
five.addEventListener("click", () => {
    checkadd(5)
  })
six.addEventListener("click", () => {
    checkadd(6)
  })
one.addEventListener("click", () => {
    checkadd(1)
  })
  two.addEventListener("click", () => {
    checkadd(2)
  })
  three.addEventListener("click", () => {
    checkadd(3)
  })
  zero.addEventListener("click", () => {
    checkadd(0)
  })
