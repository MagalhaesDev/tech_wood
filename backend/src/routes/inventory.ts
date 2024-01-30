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
      state: z.string(),
      marca: z.string(),
      model: z.string(),
      department: z.string(),
      quantity: z.string(),
      unit: z.string(),
      date_buy: z.coerce.date(),
      date_end: z.coerce.date(),
    });

    const ticketEnd = await prisma.inventorys.findFirst({
      orderBy: { ticket: "desc" },
    });

    let ticketItem = 1;

    if (ticketEnd) {
      ticketItem = ticketEnd.ticket + 1;
    }

    const item = paramsBody.parse(request.body);

    item.marca = item.marca.toLocaleLowerCase().charAt(0).toUpperCase();
    item.model = item.marca.toLocaleLowerCase().charAt(0).toUpperCase();
    item.description = item.marca.toLocaleLowerCase().charAt(0).toUpperCase() + item.marca.slice(1);

    try {
      await prisma.inventorys.create({  
        data: {
          ...item,
          ticket: ticketItem 
        },
      });

      console.log("foi")

      return response.status(200);
    } catch (err) {
      return response.status(500).send("erroooo");
    }
  });
}
