SELECT
    e.nome AS Estado,
    c.nome AS Cidade,
    e.regiao AS Região
FROM estados e, cidades c
WHERE e.id = c.estado_id

SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
FROM estados e
INNER JOIN cidades c ON e.id = c.estado_id