const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searched = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searched}`);
    makeImages(res.data);
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image.medium) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}