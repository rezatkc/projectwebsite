module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'latihan'
    },
    pool: {
    	min: 0,
    	max: 7
    },
    aqcuireConnectionTimeout: 10000
  }
}
