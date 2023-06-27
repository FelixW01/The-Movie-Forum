const fs = require('fs');

const imageBuffer1 = fs.readFileSync('./db/Seeded_Movie_Posters/elemental-md-web.jpg');
const elementalBinaryData = imageBuffer1.toString('base64');

const imageBuffer2 = fs.readFileSync('./db/Seeded_Movie_Posters/New-Little_Mermain-movie-poster.jpg'
);
const littleMermaidBinaryData = imageBuffer2.toString('base64');

const imageBuffer3 = fs.readFileSync(
  './db/Seeded_Movie_Posters/No Hard Feelings.jpeg'
);
const noHardFeelingsBinaryData = imageBuffer3.toString('base64');

const imageBuffer4 = fs.readFileSync(
  './db/Seeded_Movie_Posters/The-Flash-Movie-Poster.webp'
);
const theFlashMoviePoster = imageBuffer4.toString('base64');
