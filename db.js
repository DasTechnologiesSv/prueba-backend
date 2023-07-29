const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', //Cambiar según su configuración
  host: 'localhost', 
  database: 'prueba', //Cambiar según su configuración
  password: 'root', //Cambiar según su configuración
  port: 5432,
});

module.exports = pool;