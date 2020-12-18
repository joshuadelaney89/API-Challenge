const baseURL = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/';

const genreDiv = document.querySelector('div')

function fetchURL(){
    fetch(baseURL)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        displayGenre(json);
    })
}

function displayGenre(music){
        let genre = document.createElement('p');
        genre.innerText = music;
        genreDiv.appendChild(genre);
}

fetchURL()

