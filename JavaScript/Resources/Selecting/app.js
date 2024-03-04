const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}
//my code starts

/* PROPERTIES AND METHODS:

    .innerText 
    .textContent

*/


/* 
    .getElementById("")
    .getElementsByTagName("")
    .getElementsByClassName("")
    .querySelector("")
    .querySelectorAll("")
*/

const banner = document.getElementById("banner"); //selecting an element by id
const paragraph = document.getElementsByTagName("p");// selecting element(s) by tag name
const images = document.getElementsByClassName("square");// selecting element(s) by class name
const reference = document.querySelector('.reference');/* selecting element(s) by querey selector,
 however it selects only the first element*/
const references = document.querySelectorAll('.reference');/* selecting element(s) by querey selector,
it selects all of element*/

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
    link.innerText = "I am a link!!!!";
}

let myH1 = document.querySelector("h1");
myH1.innerText = "<i>BlaBlaBlaaa</i>";
myH1.innerHTML = "<i>BlaBlaBlaaa</i>";

let myH2Span = document.querySelector(".mw-headline");
myH2Span.style.backgroundColor = 'red';

let disgusting = document.querySelector("#disgusting");
disgusting.innerText = "Disgusting";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let spans = document.querySelectorAll(".rainbow");


for (let i = 0; i < colors.length; i++) {
    spans[i].style.color = colors[i];
}