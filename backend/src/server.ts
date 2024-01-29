import cors from '@fastify/cors';
import fastify from 'fastify';
import { inventoryRoutes } from './routes/active';

const app = fastify()

app.register(cors, {
  origin: true,
});

app.register(inventoryRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })