import { Response } from 'express';

import { Contact } from '@/contact/domain/entities/contact';
import { ListContactUseCase } from '@/contact/domain/use-case/list-contact-use-case';

export class ListContactController {
  public constructor(private readonly listContactUseCase: ListContactUseCase) {}

  public async list(res: Response): Promise<Response> {
    this.listContactUseCase.on('success', this.onSuccess(res));
    await this.listContactUseCase.handler();

    return res;
  }

  private onSuccess(res: Response):(list: Contact[]) => void {
    return (list: Contact[]) => {
      res.status(200).send(JSON.stringify(list));
    };
  }
}
