function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
singSong();

function capitalize(random) {
    let firstLetter = random[0].toUpperCase();
    let splicedString = random.slice(1);
    let returnedString = firstLetter + splicedString;
    return returnedString;
}
console.log(capitalize('addaw'));

function sumArray(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter += array[i];
    }
    return counter;
}

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num >= 1 && num <= 7)
        return days[num - 1];
    return null;
}

//METHODS
//1st syntax 
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}
//2nd syntax 
const myMath2 = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
//'this' keyword
const cat = {
    name: 'Blue Steele',
    breed: 'grey',
    meow() {
        console.log("THIS IS:", this);
        console.log(`${this.name} says MEOWWWW`);
    }
}
const meow2 = cat.meow;
//try catch
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!");
}
console.log("after!");

