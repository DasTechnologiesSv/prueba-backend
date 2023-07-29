-- Script para crear la tabla "películas"
CREATE TABLE movie (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  budget INTEGER NOT NULL,
  date VARCHAR(255) NOT NULL,
  duration INTEGER NOT NULL
);

-- Script para crear la tabla "opciones"
CREATE TABLE option (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);