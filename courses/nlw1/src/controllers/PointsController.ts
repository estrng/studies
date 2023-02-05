import { Request, Response } from "express"; // Resolver problema "any" do typescript
//Conexão com o banco de dados
import knex from "../database/conn";

class PointsController {
  async create(req: Request, res: Response) {
    const {
      nome,
      email,
      whatsapp,
      latitude,
      longitude,
      cidade,
      uf,
      items,
    } = req.body;

    const trx = await knex.transaction();
    // Knex transaction, para tratamento de querys dependentes

    const point = {
      image: req.file.filename,
      nome,
      email,
      whatsapp,
      latitude,
      longitude,
      cidade,
      uf,
    };

    const insertedIds = await trx("points").insert(point);

    const point_id = insertedIds[0];

    const pointItems = items
      .split(",")
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
        return {
          item_id,
          point_id,
        };
      });

    await trx("point_items").insert(pointItems);

    await trx.commit(); // Sempre que usar transactions não esqueca de dar um commit

    return res.json({
      id: point_id,
      ...point,
    });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return res.status(400).json({ message: "Lugar não encontrado" });
    }

    const serializedPoint = {
      ...point,
      image_url: `http://10.0.2.104:3333/uploads/${point.image}`,
    };

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.titulo");

    return res.json({ point: serializedPoint, items });
  }

  async index(req: Request, res: Response) {
    const { cidade, uf, items } = req.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));
    // Fazendo a verificacao da do conteudo String, separados por , e tirando os espaços do começo e do final.

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("cidade", String(cidade))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    const serializedPoints = points.map((point) => {
      return {
        ...point,
        image_url: `http://10.0.2.104:3333/uploads/${point.image}`,
      };
    });

    return res.json(serializedPoints);
  }
}

export default new PointsController();
// ATENCAO podemos exportar um novo objeto da classe ou intancia-lá onde for usar, mas para instacias devemos exportar utilizar sem new
