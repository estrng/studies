import knex from "knex";
import path from "path"; // Padroniza caminho de acesso de acordo com os OS

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "db.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;
// CONN Conexão com o banco
