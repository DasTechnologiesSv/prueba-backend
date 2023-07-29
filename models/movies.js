const pool = require('../db');

const createMovie = async (movie) => {
  const { name, budget, date, duration } = movie;
  const query = 'INSERT INTO movie (name, budget, date, duration) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [name, budget, date, duration];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = {
  createMovie,
};