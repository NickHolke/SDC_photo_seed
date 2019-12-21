const faker = require('faker');
const fs = require('fs');

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'nickholke',
  host: 'localhost',
  database: 'photogallery',
  port: '5432'
})

// const text = 'INSERT INTO listings(title, hostname, address, city, state) VALUES($1, $2, $3, $4, $5)'
// let i = 10; 

// while (i > 0) {
//   let values = [
//      faker.lorem.words(),
//      faker.name.firstName(),
//      faker.address.streetAddress(),
//      faker.address.city(),
//      faker.address.state()
//     ]
//   pool.query(text, values, (err, res) => {
//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log('inserted row')
//     }
    
//   })

//   pool.query(text, values)
//       .then(res => console.log('row inserted'))
//       .catch(e => console.log(e));

//   i--;
// }  

// pool.end()



const createStr = () => {
  const createRow = () => {
    return `${faker.lorem.words()},${faker.name.firstName()},${faker.address.streetAddress()},${faker.address.city()},${faker.address.state()}\n`
  }
  let csvString = 'title,hostname,address,city,state\n';
  let rows = 100;

  while (rows > 0) {
    csvString += createRow();
    rows--;
  }

  return csvString
}

fs.writeFile('./listings.csv', createStr(), (err) => {
  if (err) {
    console.log(err);
  }
  pool.query(`COPY listings(title,hostname,address,city,state) FROM '/Users/nickholke/Desktop/HackReactor/SDC/photo-download/listings.csv' DELIMITER ',' CSV HEADER`, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log('inserted csv')
    }
  })
  pool.end()
})






