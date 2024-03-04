// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container = document.querySelector('#container');
for (let i = 1; i <= 151; i++) {
    const pokemonDiv = document.createElement('div');
    const pokemonSpan = document.createElement('span');
    pokemonSpan.innerText = `#${i}`;
    const pokemonImg = document.createElement('img');
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(pokemonSpan);
    container.appendChild(pokemonDiv);
    pokemonDiv.style.display = 'inline-block';
    pokemonImg.style.display = 'block';
    pokemonDiv.style.textAlign = 'center';
}