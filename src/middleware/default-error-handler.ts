import { ExpressErrorMiddlewareInterface } from 'routing-controllers';
import {
  Request, Response, ErrorRequestHandler,
} from 'express';
import { StatusCodes } from 'http-status-codes';

import { Logger } from '@/core/logger';

export class DefaultErrorHandler implements ExpressErrorMiddlewareInterface {
  public error(error: Error, request: Request, response: Response) {
    Logger.getLogger(DefaultErrorHandler.name).error('error', error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      code: 'internal_error',
      message: 'Internal server error',
    });
  }

  public static create(): ErrorRequestHandler {
    return (err: Error, req: Request, res: Response) => {
      new DefaultErrorHandler().error(err, req, res);
    };
  }
}
