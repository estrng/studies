import Knex from "knex"; //Se tratando de typescript fazemos dessa forma para utilizar a intelence

export async function up(knex: Knex) {
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").primary();
    table.integer("point_id").notNullable().references("id").inTable("points");

    table.integer("item_id").notNullable().references("id").inTable("intems");
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("point_items");
}
