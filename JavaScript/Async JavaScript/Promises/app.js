/*
const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Rand = Math.random();
            if (Rand < 0.8) {
                const userData = { id: 1, name: 'John Doe' };
                resolve(userData);
            }
            reject('Request Error!');
        }, 1000)
    })
}

const getUserPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Rand = Math.random();
            if (Rand < 0.8) {
                const Posts = [{ id: 1, Title: 'Post 1' }, { id: 2, Title: 'Post 2' }];
                resolve(Posts);
            }
            reject('Request Error!');
        }, 1500)
    })
}

getUserData()
    .then((userData) => {
        console.log('User Data:', userData);
        return getUserPost();
    })
    .then((posts) => {
        console.log("User Posts:", posts);
    })
    .catch((error) => {
        console.log("OH NO!", error);
    });
    */

//////////////////////////////////////////////////////////////////////

/*
const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
*/
/////////////////////////////////////////////////////////////////////
/*
const sing = async () => {
    throw new Error('UH OH!')
    return 'LA >LA LA LA';
}


sing()
    .then((song) => {
        console.log('PROBLEM SOLVED WITH:', song)
    })
    .catch((err) => {
        console.log('UH NO !ERROR!!!!!!!!!', err);
    })
    */
////////////////////////////////////////////////////////////
/*
const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credential';
    if (password === 'corgifeetarecute') return 'Welcome!';
    throw 'INVALID PASSWORD!';
}

login()
    .then((msg) => {
        console.log('logged in');
        console.log(msg)
    })
    .catch((msg) => {
        console.log('Error');
        console.log(msg)
    })
*/
//////////////////////////////////////////////////////////////

/*
const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return 'ALL DONE';
}

//rainbow().then(() => {
//  console.log('END OF RAINBOW');
//})

async function printRainbow() {
    await rainbow();
    console.log('END OF RAINBOW!');
}
printRainbow();
*/
/////////////////////////////////////////////////////////////////////////

/*
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Cnnection Timeout:(');
            } else {
                resolve(`Here is your fake data from: ${url}`);
            }
        }, delay);
    });
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log('Caught an Error');
        console.log('Error is : ', e);
    }
}
makeTwoRequests();
*/

const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
async function main() {
    try {
        const user = await fetchUserData(123);
        console.log(user);
    } catch (error) {
        console.error('Error:', error);
    }
}

main(); 