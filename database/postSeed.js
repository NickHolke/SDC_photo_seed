const faker = require('faker');

console.log(faker.address.city());
console.log(faker.address.city());
console.log(faker.address.city());

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'nickholke',
  host: 'localhost',
  database: 'photogallery',
  port: '5432'
})

pool.connect();
const text = 'INSERT INTO listings(title, hostname, address, city) VALUES($1, $2, $3, $4)'
const values = ['pretty home', 'brian', '2344 tanager', 'pleasanton']
  pool.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log('inserted row')
    }
  })
  pool.end(() => {
    console.log('pool has ended')
  })



