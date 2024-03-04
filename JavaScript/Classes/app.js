/*
class Color {
    constructor(r, g, b, name) {
        //console.log('inside constructor');
        this.r = r; //these are going to be added as proprties on the new color object that we get returned
        this.g = g;// "this" will automatically refers to new object
        this.b = b;
        this.name = name;
    }

    greet() {
        return `Hello from ${this.name}!`;
    }
    rgb() {
        //  return `rgb(${this.r},${this.g},${this.b})`; we can use that or:
        const { r, g, b } = this;
        return `rgb(${r},${g},${b}!)`
    }
}

const tomato = new Color(255, 67, 87, 'tomato');
const white = new Color(255, 255, 255, 'white');
*/
///////////////////////////////////////////////////////////////////////

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    //if we wanna use adiitional variables in constructor we should use 'super':
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWWW!';
    }
}
class Dog extends Pet {
    bark() {
        return 'WOOOF!';
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}