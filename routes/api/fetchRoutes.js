const movieUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=0cf4a573790d3bdae8c90dfbc0c91d5f';

async function getMovies() {
  const movieData = await fetch(movieUrl).then(res => res.json());
  if (movieData.results) {
    const movies = movieData.results;
    const formattedMovies = movies.map(movie => {
      const formattedMovie = {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        summary: movie.overview,
      };
      return JSON.stringify(formattedMovie);
    });

    const fs = require('fs');
    const path = '../../seeds/api.json';

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
