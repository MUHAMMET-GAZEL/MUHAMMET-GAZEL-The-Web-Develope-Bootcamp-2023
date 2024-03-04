let num = prompt("enter a number:");
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    else if (num > 1) {
        let fact = 1;
        while (num >= 1) {
            fact *= num;
            num -= 1;
        }
        return fact;
    }
    else console.log("INVALID INPUT!");
}