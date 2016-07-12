module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'p3p3r3in4',
      database: 'latihan'
    },
    pool: {
    	min: 0,
    	max: 7
    },
    aqcuireConnectionTimeout: 10000
  }
}
