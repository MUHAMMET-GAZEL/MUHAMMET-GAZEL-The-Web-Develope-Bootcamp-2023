/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j]);
    }
}

const secret = "BabyHippo";
let guessed = prompt("enter the secret code:");
while (guessed !== secret) {
    guessed = prompt("enter the secret code:");
}
console.log("congrats! you entered got the secret!");


//Guessing game!


let max = prompt('please enter the maximum number:');
console.log(max);
let target = Math.floor(Math.random() * max) + 1;
console.log(target);

let guess = prompt('guess a number!');
console.log(guess);


while (parseInt(guess) !== target) {
    console.log(target);
    if (guess < target) {
        guess = prompt('too small!');
    } else {
        guess = prompt('too large!');
    }
}
console.log("you got the number !");
