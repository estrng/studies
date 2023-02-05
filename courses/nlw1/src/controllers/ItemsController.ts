import { Request, Response } from "express"; // Resolver problema "any" do typescript
//Conexão com o banco de dados
import knex from "../database/conn";

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*");
    // Selecionar todos os items do banco.

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        titulo: item.titulo,
        image_url: `http://10.0.2.104:3333/uploads/${item.image}`,
      };
    });
    // Editando o retorno das informações

    return res.json(serializedItems);
  }
}

export default new ItemsController();
