SELECT * FROM cidades;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);

SELECT * FROM prefeitos;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null)

-- Gera erro pois a cidade deve ser única

-- INSERT INTO prefeitos
--     (nome, cidade_id)
-- VALUES
--     ('Rodrigo Pinheiro', 3);