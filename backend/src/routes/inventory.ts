import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function inventoryRoutes(app: FastifyInstance) {
  app.get("/inventorys", async (req ,res) => {
    const { param }: any = req.query;
    if(param === "all") {
      const inventorys = await prisma.inventorys.findMany();
      return inventorys;
    } else {
      const inventorys = await prisma.inventorys.findMany({
        where: {
          grup: param,
        },
      });
      return inventorys;
    }   
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

    function generatorQRCODE () {
      const one = item.unit.slice(0,1) + item.grup.slice(0,1) + item.department.slice(0,1) + ticketItem;
    }

    try {
      await prisma.inventorys.create({  
        data: {
          ...item,
          ticket: ticketItem 
        },
      });

      return response.status(200);
    } catch (err) {
      return response.status(500);
    }
  });
}
