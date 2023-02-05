import Knex from "knex"; //Se tratando de typescript fazemos dessa forma para utilizar a intelence

export async function up(knex: Knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("titulo").notNullable();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}
