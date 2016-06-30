var knex = require('knex');

knex.schema.createTable('users', function(table){
    table.increments();
    table.string('nama');
    table.timestamps();
});