/*
function multiply(x, y) {
    return x * y;
}
function square(x) {
    return multiply(x, x);
}
function isRightTriangle(a, b, c) {
    return square(a) + square(c) === square(c);
}
isRightTriangle(3, 4, 5);
*/
///////////////////////////////////////////////////////////////////////////

/*
console.log('Sneding request to server');

setTimeout(function () {
    console.log('here is your data from server:');
}, 3000);

console.log('I AM AT THE END OF THE FILE');
*/
/////////////////////////////////////////////////////////////////////////////

/* VERSION 1
setTimeout(function () {
    document.body.style.backgroundColor = 'red';
    setTimeout(function () {
        document.body.style.backgroundColor = 'orange';
        setTimeout(function () {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(function () {
                document.body.style.backgroundColor = 'green';
                setTimeout(function () {
                    document.body.style.backgroundColor = 'blue';
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/

/* VERSION 2
const delayedChange = function (newColor, delay, doNext) {
    setTimeout(function () {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

    delayedChange('red', 1000, () => {
        delayedChange('orange', 1000, () => {
            delayedChange('yellow', 1000, () => {
                delayedChange('green', 1000, () => {
                    delayedChange('blue', 1000, () => {

                    })
                })
            })
        })
    });
*/

/* VERSION 3
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let currentIndex = 0;

const delayedChange = function (newColor, delay, doNext) {
    setTimeout(function () {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

const changeColorLoop = function () {
    delayedChange(colors[currentIndex], 1000, () => {
        currentIndex = (currentIndex + 1) % colors.length;
        changeColorLoop();
    })
}

changeColorLoop();
*/
/////////////////////////////////////////////////////////////////////////

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Rand = Math.random();
            if (Rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE WHITH REQUEST!', data);
    })
    .catch((err) => {
        console.log('OH NO!', err);
    })