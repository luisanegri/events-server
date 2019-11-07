const Sequelize = require('sequelize');
const databaseUrl = 'postgres://postgres:6772@localhost:5432/postgres';
const db = new Sequelize(databaseUrl);

db.sync(() => console.log('database connected')).catch(console.error);

module.exports = db;
