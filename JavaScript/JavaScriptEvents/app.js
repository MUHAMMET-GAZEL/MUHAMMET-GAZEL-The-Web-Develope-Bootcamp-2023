/*
const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!");
}
function scream() {
    console.log("AAAAAHHHH!!!");
    console.log("STOP TOUCHING ME!!");
}
btn.onmouseenter = scream;



/////////////////////////////////////////////////////////////////////////////////

const RandColorBtn = document.querySelector("#RandColorBtn");


const GenerateRandColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const RandomColor = `rgb(${r}, ${g}, ${b})`;
    return RandomColor;
}

const RandBodyColor = function () {
    const newColor = GenerateRandColor();
    document.body.style.backgroundColor = newColor;
}


RandColorBtn.addEventListener('click', RandBodyColor);

///////////////////////////////////////////////////////////////////////////

const btns = document.querySelectorAll('button');

for (let i of btns) {
    i.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = GenerateRandColor();
    this.style.color = GenerateRandColor();
}
*/

///////////////////////////////////////////////////////////////////////////

/*document.querySelector('button').addEventListener('click', function (e) {
    console.log(e);
})

const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code);
})
input.addEventListener('keyup', function () {
    console.log("KEYUP");
})

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('Down!');
            break;
        case 'ArrowLeft':
            console.log('Left!');
            break;
        case 'ArrowRight':
            console.log('Right!');
            break;
        default:
            console.log('Ignored');
    }
})
*/

////////////////////////////////////////////////////////////////////////////
/*
const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const List = document.querySelector('#cats');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //console.log('default prevented!');
    //console.log(catName.value);
    const catName = input.value;
    const newLi = document.createElement('li');
    newLi.append(catName);
    List.appendChild(newLi);
    input.value = '';

})
*/

