require('dotenv').config();
const key = process.env.DB_KEY
const movieUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key='+ key;

async function getMovies() {
  const movieData = await fetch(movieUrl).then(res => res.json());
  if (movieData.results) {
    const movies = movieData.results;
    let i = 0;
    let formattedMovies = [];

    for (const movie of movies) {
      if (i < 20) {
        const formattedMovie = {
          id: movie.id,
          title: movie.title,
          poster: movie.poster_path,
          summary: movie.overview,
        };
        formattedMovies.push(formattedMovie);
      }
      i++;
    }

    const fs = require('fs');
    const path = '../../seeds/movie.json';

    fs.writeFile(path, JSON.stringify(formattedMovies), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File saved!');
      }
    });
  } else {
    console.log('No movies found');
  }
}

getMovies();
