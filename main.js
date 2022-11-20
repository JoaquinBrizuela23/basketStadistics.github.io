/* const cantidad = document.getElementsByClassName("cantidad");
const button_plus = document.getElementsByClassName("button+");
const button_minus = document.getElementsByClassName("button-");
let items = 0;
function increaseItem() {
    items++;
    cantidad.textContent = items;
    
}
function decreaseItem() {
    if (items > 0) items--;
    cantidad.textContent = items;
}

button_plus.addEventListener("click", increaseItem());
button_minus.addEventListener("click", decreaseItem()); */ 

const cantidad = document.getElementById("cantidad");
const button_mas = document.getElementById("button+");
const button_menos = document.getElementById("button-");
let items = 0;
function increaseItem() {
    items++;
    cantidad.textContent = items;
    
}
function decreaseItem() {
    if (items > 0) items--;
    cantidad.textContent = items;
}

button_mas.addEventListener("click", increaseItem);
button_menos.addEventListener("click", decreaseItem);



const cantidad1 = document.getElementById("cantidad1");
const button_mas1 = document.getElementById("button2");
const button_menos2 = document.getElementById("button3");
let items1 = 0;
function incremento() {
    items1++;
    cantidad1.textContent = items1;
    
}
function decremento() {
    if (items1 > 0) items1--;
    cantidad1.textContent = items1;
}

button_mas1.addEventListener("click", incremento);
button_menos2.addEventListener("click", decremento);



const cantidad2 = document.getElementById("cantidad2");
const button_mas2 = document.getElementById("button4");
const button_menos3 = document.getElementById("button5");
let items2 = 0;
function incremento1() {
    items2++;
    cantidad2.textContent = items2;
    
}
function decremento1() {
    if (items2 > 0) items2--;
    cantidad2.textContent = items2;
}

button_mas2.addEventListener("click", incremento1);
button_menos3.addEventListener("click", decremento1);



const cantidad3 = document.getElementById("cantidad3");
const button_mas3 = document.getElementById("button6");
const button_menos4 = document.getElementById("button7");
let items3 = 0;
function incremento2() {
    items3++;
    cantidad3.textContent = items3;
    
}
function decremento3() {
    if (items3 > 0) items3--;
    cantidad3.textContent = items3;
}

button_mas3.addEventListener("click", incremento2);
button_menos4.addEventListener("click", decremento3);



