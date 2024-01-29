import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function inventoryRoutes(app: FastifyInstance) {
  app.get("/inventorys", async () => {
    const inventorys = await prisma.inventorys.findMany();

    return inventorys;
  });

  app.post("/inventorys", async (request, response) => {
    const paramsBody = z.object({
      grup: z.string(),
      description: z.string(),
      value_un: z.string(),
      value_total: z.string(),
      state: z.string(),
      marca: z.string(),
      model: z.string(),
      department: z.string(),
      quantity: z.string(),
      unit: z.string(),
      date_buy: z.coerce.date(),
      date_end: z.coerce.date(),
    });

    const item = paramsBody.parse(request.body);

    try {
      await prisma.inventorys.create({
        data: {
          ...item,
        },
      });

      return response.status(200);
    } catch (err) {
      return response.status(500);
    }
  });
}
