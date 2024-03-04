/*
console.log("HELLO FROM MY FIRST JS FILE!!");
let total = 1 + 5;
console.log(total);
console.log("GOODBYE!");

if (1 + 1 === 2) {
    console.log("MATH STILL WORKS!");
}
if (1 + 1 === 3) {
    console.log("MATH STILL WORKS!");
}


let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
    console.log("YOUR NUMBER IS:", random);
}
if (random >= 0.5) {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
    console.log("YOUR NUMBER IS:", random);
}


let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
}
else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
}
console.log("YOUR NUMBER IS:", random);


let userInput = prompt("PLEASE ENTER YOUR NUMBER TO TELL YOU WHETHER EVEN OR ODD:");
if (userInput % 2 === 0) {
    console.log("THE INPUTTED NUMBER IS EVEN.");
} else if (userInput % 2 == 1) {
    console.log("THE INPUTTED NUMBER IS ODD.");
} else {
    console.log("INVALID INPUT.");
}



const password = prompt("please enter a new password:");

if (password.length >= 6) {
    if (password.indexOf('') === -1) {
        console.log("Valid password!")
    } else {
        console.log("Passord cannot contain spaces!")
    }
} else {
    console.log("Password too short! Must be 6+ characters.")
}
*/
/*
0-5 free
5-10 10$
10-65 20$
65+ free
*/
/*
const age = prompt("Please enter your age:");

if (age > 0 && age < 5 || age >= 65) {
    console.log("FREE!");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE!");
}
*/

//parseInt() converts string to a number , if there were letters in the string it ignores them.
//length() returns the length of a string.
//push()
/*
let movieLine = ['tom', 'nancy'];
movieLine.push('oliver');
console.log(movieLine);

//pop()
movieLine.pop();
console.log(movieLine);

//shift()
movieLine.shift();
console.log(movieLine);

//unshift()
movieLine.unshift('Ahmed');
console.log(movieLine);

//concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

//includes()
const arr1 = [1, 2, 3];
console.log(arr1.includes(2));

//indexOf()
const colors = ['blue', 'red', 'green'];
console.log(colors.indexOf('red'));
console.log(colors.indexOf('black'));

//reverse()
const ex1 = ['one', 'two', 'three'];
const reversed = ex1.reverse();
console.log(reversed);

//slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(-2));

//splice()
let colours = ['blue', 'red', 'green', 'yellow', 'black', 'white', 'orange'];
colours.splice(5, 1);
console.log(colours);
console.log(colours.splice(3, 0, 'cyan'));
*/

