import { Response } from 'express';
import { Controller, Get, Res } from 'routing-controllers';
import { inject, injectable } from 'inversify';
import { StatusCodes } from 'http-status-codes';

import { Contact } from '@/contact/domain/entities/contact';
import { ListContactUseCase } from '@/contact/domain/use-case/list-contact-use-case';

@Controller()
@injectable()
export class ListContactController {
  public constructor(
    @inject(ListContactUseCase) private readonly listContactUseCase: ListContactUseCase,
  ) {}

  @Get('/contacts')
  public async list(@Res() res: Response): Promise<Response> {
    this.listContactUseCase.on('success', this.onSuccess(res));
    await this.listContactUseCase.handler();

    return res;
  }

  private onSuccess(res: Response):(list: Contact[]) => void {
    return (list: Contact[]) => {
      res.status(StatusCodes.OK).json(list);
    };
  }
}
