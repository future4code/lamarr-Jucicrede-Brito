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