import { FastifyInstance } from "fastify";
import { z } from 'zod';
import { prisma } from "../lib/prisma";

export async function activesRoutes(app: FastifyInstance) {

app.get('/actives',async () => {
  const products = await prisma.actives.findMany();

  return products;
})

app.get('/actives/:id',async (request) => {
  const paramsSchema = z.object( {
    id: z.string().uuid(),
  })

  const { id } = paramsSchema.parse(request.params)

  const product = await prisma.actives.findUniqueOrThrow({
    where: {
      id,
    }
  })

  return product;
})

}