INSERT INTO User (id, first_name, last_name, email, password)
VALUES (000, "Regina", "Smith", "rsmith@gmail.com", "12345678"),
       (001, "Jon", "Jones", "jjones@gmail.com", "12345678"),
       (002, "Jessica", "Alcorn", "jalcon33@gmail.com", "12345678"),
       (003, "Randy", "Ward", "rward@gmail.com", "12345678");

INSERT INTO Movie (id, title)
VALUES (001, "Elemental"),
       (002, "No Hard Feelings"),
       (003, "The Little Mermain"),
       (004, "The Flash");

INSERT INTO Comment (id, user, content, parent_post)
VALUES (000, "alphazeta", "The Flash", "This is the best movies ever"),
       (001, "funrunner79", "Elemental", "My child loved this film"),
       (002, "askmenot31", "No Hard Feelings", "I tried to laugh... I tried."),
       (003, "almostwinning24", "The Little Mermaid", "My daughter enjoyed it, so I did too!");

INSERT INTO Post (id, title, user, description, content)
VALUES (001, "Elemental", "funrunner79", "Too Funny", "My child loved this film"),
       (002, "No Hard Feelings", "askmenot31", "Not Really,", "I tried to laugh... I tried."),
       (003, "The Little Mermaid", "almostwinning24", "Happy Child", "littleMermaidBiDa"),
       (004, "The Flash", "alphazeta", "I'm a fan again", "This is the best movies ever");
