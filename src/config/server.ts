// this shim is required
import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { useContainer, useExpressServer } from 'routing-controllers';

import { diContainer } from '@/config/di-container';
import { DefaultErrorHandler } from '@/middleware/default-error-handler';

const server = express();
server.disable('x-powered-by');

useContainer(diContainer);

useExpressServer(server, {
  routePrefix: '/api',
  validation: true,
  classTransformer: true,
  plainToClassTransformOptions: {
    enableImplicitConversion: false,
  },
  defaultErrorHandler: false,
});

server.get('/', (req: Request, res: Response) => res.status(StatusCodes.OK).send('server running'));

server.use(DefaultErrorHandler.create());

export { server };
