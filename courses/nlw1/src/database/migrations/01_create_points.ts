import Knex from "knex"; //Se tratando de typescript fazemos dessa forma para utilizar a intelence

export async function up(knex: Knex) {
  return knex.schema.createTable("points", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.decimal("latitude").notNullable();
    table.decimal("longitude").notNullable();
    table.string("cidade").notNullable();
    table.string("uf", 2).notNullable(); // Podemos definir a quantidade de caracteres atráves do segundo parametros
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("point");
}
