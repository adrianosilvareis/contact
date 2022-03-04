import { inject, injectable } from 'inversify';

import { Logger } from '@/core/logger';
import { Command } from '@/core/command';
import { ListContactRepository } from '@/contact/domain/repositories/list-contact-repository';
import { EventNotFoundError } from '@/erros/event-not-found-error';

@injectable()
export class ListContactUseCase extends Command {
  private logger: Logger;

  public constructor(
    @inject(ListContactRepository) private readonly listContactRepository: ListContactRepository,
  ) {
    super();

    this.logger = Logger.getLogger(ListContactUseCase.name);
  }

  public async handler(): Promise<void> {
    try {
      const list = await this.listContactRepository.getContacts();
      this.emit('success', list);
    } catch (error: unknown) {
      this.logger.error('handler', error);
      if (error instanceof EventNotFoundError) {
        throw error;
      } else {
        this.emit('error', error);
      }
    }
  }
}
