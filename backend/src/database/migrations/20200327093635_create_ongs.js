
exports.up = function(knex) { //metodo responsavel pela criacao da tabela
  return knex.schema.createTable(`ongs`, function(table){
      table.string(`id`).primary();
      table.string(`name`).notNullable();
      table.string(`email`).notNullable();
      table.string(`whatsapp`).notNullable();
      table.string(`city`).notNullable();
      table.string(`uf`, 2).notNullable();

  })
}; 
exports.down = function(knex) { // se der problema, que que eu faco
  return knex.schema.dropTable(`ongs`);
};
