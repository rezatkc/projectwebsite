
exports.up = function(knex, Promise) {
  
  return Promise.all([
		knex.schema.createTable('dokter', function(table){
			table.increments('id').primary();
			table.string('username');
			table.string('password');
			table.string('nama');
			table.string('email');
			table.string('lat');
			table.string('lng');
      		table.text('alamat');
			table.text('foto');
		})	
	]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('dokter')
  ]);
};
