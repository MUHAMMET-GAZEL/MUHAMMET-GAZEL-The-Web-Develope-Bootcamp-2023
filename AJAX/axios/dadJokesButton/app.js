/*
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data);
    } catch (e) {
        console.log('ERROR!', e);
    }
}
getStarWarsPerson(45);
*/
/////////////////////////////////////////////////////
let jokes = document.querySelector('#jokes');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.appendChild(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        console.log('no joke are available');
    }
}

const button = document.querySelector('button');

button.addEventListener('click', addNewJoke);