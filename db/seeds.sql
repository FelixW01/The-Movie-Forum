INSERT INTO User (id, username, email, password)
VALUES (1, "alphazeta", "rsmith@gmail.com", "12345678"),
       (2, "funrunner79", "jjones@gmail.com", "12345678"),
       (3, "askmenot31", "jalcon33@gmail.com", "12345678"),
       (4, "almostwinning24", "rward@gmail.com", "12345678");

INSERT INTO Movie (id, title)
VALUES (1, "Elemental"),
       (2, "No Hard Feelings"),
       (3, "The Little Mermaid"),
       (4, "The Flash");

INSERT INTO Comment (id, userId, username, content)
VALUES (1, 1, "alphazeta", "This is the best movies ever"),
       (2, 2, "funrunner79", "My child loved this film"),
       (3, 3, "askmenot31", "I tried to laugh... I tried."),
       (4, 4, "almostwinning24", "My daughter enjoyed it, so I did too!");

INSERT INTO Post (id, title, userId, description, content)
VALUES (1, "Elemental", 2, "Too Funny", "My child loved this film"),
       (2, "No Hard Feelings", 3, "Not Really,", "I tried to laugh... I tried."),
       (3, "The Little Mermaid", 4, "Happy Child", "littleMermaidBiDa"),
       (4, "The Flash", 1, "I'm a fan again", "This is the best movies ever");
