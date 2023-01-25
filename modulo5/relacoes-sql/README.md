
#  Introdução a SQL
-- Exercicio 1

 CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
DESCRIBE Actor;

 -- Exercicio 2
 
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Peres",
  1200000,
  "1963-08-23", 
  "female"
);
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Carla Peres",
  1400000,
  "1962-09-26", 
  "female"
);
-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.187 sec Id duplicado, como é uma PRIMARY KEY  só pode ter um ID 002.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

 -- Exercicio 3
 -- a) Escreva uma query que retorne todas as informações das atrizes.
 
 SELECT * FROM Actor WHERE gender = "female";
 
 -- b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
 
  SELECT name, salary FROM Actor WHERE id = "001";
  
  -- c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
  
  SELECT id, name from Actor WHERE gender = "invalid";
  
  -- d)
   SELECT * FROM Actor WHERE salary < "500000";
   
   -- e)
   SELECT id, nome from Actor WHERE id = "002";
  -- Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'SELECT * FROM Actor'  . O "nome" está diferente, o correto é name.
  
  -- Exercício 4
  
  -- a)
 SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- Retornou os Atores Antônio Fagundes e Juliana Paes cujos se inicia com a letra A e J e salarios maior que  300000.

-- b)  
 SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

-- c)
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

-- d)
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
 
SELECT * FROM Actor;

-- Exercício 5
-- a)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
DESCRIBE Movie;

-- b)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUE (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

-- c)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUE (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2022-12-27",
10
);

-- d)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUE (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

-- e)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUE (
"004",
"O Auto da Compadecida",
"As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.",
"2000-09-10",
10
);

-- Exercício 6
-- a)  Retorne o id, título e avaliação a partir de um id específico;
SELECT id, title, rating FROM Movie
 WHERE id = "004";

-- b) Retorne um filme a partir de um nome específico;
SELECT * FROM Movie 
WHERE title = "Doce de mãe";

-- c)  Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, title, synopsis FROM Movie 
WHERE rating > 7;

-- Exercício 7
-- a)  
SELECT *FROM Movie 
WHERE title LIKE "%vida%";

-- b)
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

-- c)
SELECT * FROM Movie
WHERE release_date < "2020-05-04";

-- d)
SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;


SELECT * FROM Movie;

# Aprofundamento SQL 

-- Exercício 1
-- letra a) o DROP COLUMN vai remover a coluna de salarios

-- letra b) o ALTER junto ao CHANGE altera o nome definido primeiro pelo segundo nome indicado. No caso gênero
-- será trocado por sexo. O VARCHAR indica que será uma string com 6 caracteres

-- letra c) Neste caso o termo gênero será trocado pelo mesmo, gênero. e a string poderá ter até 255 caracteres


-- letra d)
ALTER TABLE Actor
CHANGE gender sexo VARCHAR(100);

-- Exercício 2
-- letra a)
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1945-01-29"
WHERE id = "003";

-- letra b)
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor 
SET name = "Juliana Paes"
WHERE id = "005";

-- letra c)
UPDATE Actor
SET name = "Alanis Guillen",
birth_date = "1998-05-20",
salary = 713222,
sexo = "female"
WHERE id = "003";

-- letra d)
UPDATE Actor
SET name = "Robson Crusoé"
WHERE id = "009";
-- Não apareceu como erro (veio verde), mas inofrmou que não houve nenhuma linha afetada, e 0 mudanças.

-- Exercicio 3
-- letra a)
DELETE FROM Actor WHERE name = "Juliana Paes";
-- Como eu tinha colocado o nome de Fernanda Montenegro, usei o de Juliana Paes.

-- letra b)
DELETE FROM Actor
WHERE sexo = "male" AND salary > 1000000;

-- Exercício 4
-- letra a)
SELECT MAX(salary) FROM Actor;

-- letra b)
SELECT MIN(salary) FROM Actor 
WHERE sexo = "female";

-- letra c)
SELECT COUNT(*) FROM Actor
 WHERE sexo = "female";
 
 -- letra d)
 SELECT SUM(salary) FROM Actor;
 
 -- Exercício 5
 -- letra a)
 SELECT COUNT(*), sexo
FROM Actor
GROUP BY sexo;
-- Retorna a quantidades de atores e atrizes.alter

-- letra b)
SELECT id, name FROM Actor
ORDER BY name DESC; 

-- letra c)
SELECT * FROM Actor ORDER BY salary;

-- letra d)
SELECT * FROM Actor ORDER BY salary ASC LIMIT 3;

-- letra e)
SELECT AVG(salary), sexo FROM Actor GROUP BY sexo;

-- Exercicio 6
-- letra a)
ALTER TABLE Movie ADD playing_limit_date DATE;

-- letra c)
UPDATE Movie
SET release_Date = "2020-12-31"
WHERE id = "001";

DESCRIBE Actor;
SHOW TABLES;
SELECT * FROM Actor;
SET SQL_SAFE_UPDATES = 0;
SELECT * FROM Movie;
=======
# RELACOES-SQL

-- Exercício 1
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
-- letra a)
-- A chave estrangeira (foreign key) indica a relação entre uma tabela
-- e a chave primária de outra tabela.

-- letra b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
	"001",
    "Muito bom.",
    "9",
    "001"
);
-- letra c)
-- Não é possível adicionar ou atualizar uma linha filha, pois há uma restrição de chave estrangeira.

-- letra d)
ALTER TABLE  Rating DROP COLUMN  rate;

-- letra e)
DELETE FROM Rating
WHERE id=001;

-- O resultado foi a exclusão do item incluído com comentário sobre o filme de id = 001.

-- Exercício 2
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- letra a)
-- Esta tabela alia duas tabelas previamente elaboradas: filmes, e atores. Ao criar Foreign Keys relacionados
-- às primary keys, as tabelas são relacionadas, podendo indicar em que filmes (tabela 1) os atores 
-- tabela 2) atuaram.alter 
-- a tabela de atores dos filmes tem duas colunas, que indicam os ids de cada um dos itens
-- a serem relacionados (ator e filme), para a partir daí permitir a relação dos dados das tabelas.

-- letra b)
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"002",
    "003"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"003",
    "004"
);
-- Exercício 3
SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
-- letra a)
-- Usar o join permite trazer dados de duas tabelas que podem ser relacionadas. No caso no inner join,
--   ele retorna registros relacionados nas duas tabelas. Já o ON define a condição pela qual as tabelas
--   serão juntadas.
--   Nesta proposta foram aliadas as tabelas com a avaliação e os filmes

DESCRIBE Actor;
SELECT * FROM Actor;
SELECT * FROM MovieCast;
SET SQL_SAFE_UPDATES = 0;
SELECT * FROM Movie;
SELECT * FROM Rating;

