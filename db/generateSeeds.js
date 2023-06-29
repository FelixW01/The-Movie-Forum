const fs = require('fs');

const imageBuffer1 = fs.readFileSync('./db/Movie_Posters/elemental-md-web.jpg');
const elementalBiDa = imageBuffer1.toString('base64');

const imageBuffer2 = fs.readFileSync(
  './db/Movie_Posters/New-Little-Mermaid-movie-poster.jpg'
);
const littleMermaidBiDa = imageBuffer2.toString('base64');

const imageBuffer3 = fs.readFileSync(
  './db/Movie_Posters/No Hard Feelings.jpeg'
);
const noHardFeelingsBiDa = imageBuffer3.toString('base64');

const imageBuffer4 = fs.readFileSync(
  './db/Movie_Posters/The-Flash-Movie-Poster.webp'
);
const theFlashMoviePosterBiDa = imageBuffer4.toString('base64');

const forumSeedData = `
INSERT INTO User (id, username, email, password)
VALUES (1, "alphazeta", "rsmith@gmail.com", "12345678"),
       (2, "funrunner79", "jjones@gmail.com", "12345678"),
       (3, "askmenot31", "jalcon33@gmail.com", "12345678"),
       (4, "almostwinning24", "rward@gmail.com", "12345678");

INSERT INTO Movie (id, title, poster)
VALUES (1, "Elemental", "${elementalBiDa}"),
       (2, "No Hard Feelings", "${noHardFeelingsBiDa}"),
       (3, "The Little Mermain", "${littleMermaidBiDa}"),
       (4, "The Flash", "${theFlashMoviePosterBiDa}");

INSERT INTO Comment (id, userId, username, content)
VALUES (1, 1, "alphazeta", "This is the best movies ever"),
       (2, 2, "funrunner79", "My child loved this film"),
       (3, 3, "askmenot31", "I tried to laugh... I tried."),
       (4, 4, "almostwinning24", "My daughter enjoyed it, so I did too!");

INSERT INTO Post (id, title, userId, description, content, img)
VALUES (1, "Elemental", 2, "Too Funny", "My child loved this film", 
       "${elementalBiDa}"),
       (2, "No Hard Feelings", 3, "Not Really,", "I tried to laugh... I tried.", "${noHardFeelingsBiDa}"),
       (3, "The Little Mermaid", 4, "Happy Child", "littleMermaidBiDa", "${littleMermaidBiDa}"),
       (4, "The Flash", 1,"I'm a fan again", "This is the best movies ever", "${theFlashMoviePosterBiDa}");
       `;

const generateSeed = async function () {
  const User = require('./models/user');
  const Post = require('./models/post');
  const Comment = require('./models/comment');
  const Movie = require('./models/movie');

  try {
    // Insert users
    await User.bulkCreate([
      {
        id: 1,
        username: 'alphazeta',
        email: 'rsmith@gmail.com',
        password: '12345678',
      },
      {
        id: 2,
        username: 'funrunner79',
        email: 'jjones@gmail.com',
        password: '12345678',
      },
      {
        id: 3,
        username: 'askmenot31',
        email: 'jalcon33@gmail.com',
        password: '12345678',
      },
      {
        id: 4,
        username: 'almostwinning24',
        email: 'rward@gmail.com',
        password: '12345678',
      },
    ]);

    // Insert movies
    await Movie.bulkCreate([
      { 
        id: 1,
        title: 'Elemental', 
        poster: elementalBiDa 
      },
      { 
        id: 2, 
        title: 'No Hard Feelings', 
        poster: noHardFeelingsBiDa 
      },
      { 
        id: 3,
        title: 'The Little Mermaid',
        poster: littleMermaidBiDa 
      },
      { 
        id: 4, 
        title: 'The Flash', 
        poster: theFlashMoviePosterBiDa 
      },
    ]);

    // Insert comments
    await Comment.bulkCreate([
      {
        id: 1,
        userId: 1,
        username: 'alphazeta',
        content: 'This is the best movie ever',
      },
      {
        id: 2,
        userId: 2,
        username: 'funrunner79',
        content: 'My child loved this film',
      },
      {
        id: 3,
        userId: 3,
        username: 'askmenot31',
        content: 'I tried to laugh... I tried.',
      },
      {
        id: 4,
        userId: 4,
        username: 'almostwinning24',
        content: 'My daughter enjoyed it, so I did too!',
      },
    ]);

    // Insert posts
    await Post.bulkCreate([
      {
        id: 1,
        title: 'Elemental',
        userId: 2,
        description: 'Too Funny',
        content: 'My child loved this film',
        img: elementalBiDa,
        movieId: 1,
      },
      {
        id: 2,
        title: 'No Hard Feelings',
        userId: 3,
        description: 'Not Really',
        content: 'I tried to laugh... I tried.',
        img: noHardFeelingsBiDa,
        movieId: 2,
      },
      {
        id: 3,
        title: 'The Little Mermaid',
        userId: 4,
        description: 'Happy Child',
        content: 'littleMermaidBiDa',
        img: littleMermaidBiDa,
        movieId: 3,
      },
      {
        id: 4,
        title: 'The Flash',
        userId: 1,
        description: "I'm a fan again",
        content: 'This is the best movies ever',
        img: theFlashMoviePosterBiDa,
        movieId: 4,
      },
    ]);

    fs.writeFileSync('seeds.sql', forumSeedData);
  } catch (error) {
    console.error('Error generating seed data:', error);
  }
};

module.exports = generateSeed;
