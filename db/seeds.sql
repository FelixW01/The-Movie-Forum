INSERT INTO User (id, username, email, password)
VALUES (1, "alphazeta", "rsmith@gmail.com", "12345678"),
       (2, "funrunner79", "jjones@gmail.com", "12345678"),
       (3, "askmenot31", "jalcon33@gmail.com", "12345678"),
       (4, "almostwinning24", "rward@gmail.com", "12345678");

INSERT INTO Movie (id, title)
VALUES (1, "Elemental"),
       (2, "No Hard Feelings"),
       (3, "The Little Mermain"),
       (4, "The Flash");

INSERT INTO Comment (id, username, content)
VALUES (1, "alphazeta", "This is the best movies ever"),
       (2, "funrunner79", "My child loved this film"),
       (3, "askmenot31", "I tried to laugh... I tried."),
       (4, "almostwinning24", "My daughter enjoyed it, so I did too!");

INSERT INTO Post (id, title, username, description, content)
VALUES (1, "Elemental", "funrunner79", "Too Funny", "My child loved this film"),
       (2, "No Hard Feelings", "askmenot31", "Not Really,", "I tried to laugh... I tried."),
       (3, "The Little Mermaid", "almostwinning24", "Happy Child", "littleMermaidBiDa"),
       (4, "The Flash", "alphazeta", "I'm a fan again", "This is the best movies ever");
