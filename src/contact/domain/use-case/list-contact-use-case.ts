import { inject, injectable } from 'inversify';

import { Command } from '@/core/command';
import { ListContactRepository } from '@/contact/domain/repositories/list-contact-repository';

@injectable()
export class ListContactUseCase extends Command {
  public constructor(
    @inject(ListContactRepository) private readonly listContactRepository: ListContactRepository,
  ) {
    super();
  }

  public async handler(): Promise<void> {
    const list = await this.listContactRepository.getContacts();
    this.emit('success', list);
  }
}
