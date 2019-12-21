const faker = require('faker');

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'nickholke',
  host: 'localhost',
  database: 'photogallery',
  port: '5432'
})

const text = 'INSERT INTO listings(title, hostname, address, city, state) VALUES($1, $2, $3, $4, $5)'
let i = 10; 

while (i > 0) {
  let values = [
     faker.lorem.words(),
     faker.name.firstName(),
     faker.address.streetAddress(),
     faker.address.city(),
     faker.address.state()
    ]
  // pool.query(text, values, (err, res) => {
  //   if (err) {
  //     console.log(err.stack)
  //   } else {
  //     console.log('inserted row')
  //   }
    
  // })

  pool.query(text, values)
      .then(res => console.log('row inserted'))
      .catch(e => console.log(e));

  i--;
}  

pool.end()





