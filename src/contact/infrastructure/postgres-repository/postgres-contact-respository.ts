import { inject, injectable } from 'inversify';

import { Contact } from '@/contact/domain/entities/contact';
import { ListContactRepository } from '@/contact/domain/repositories/list-contact-repository';
import { DbClient } from '@/config/db-client';
import { ContactParse } from '@/contact/infrastructure/parses/contact-parse';

@injectable()
export class PostgresContactRepository implements ListContactRepository {
  public constructor(@inject(DbClient) private client: DbClient) {}

  async getContacts(): Promise<Contact[]> {
    const contacts = await this.client.db.contact.findMany();
    return new ContactParse().parseFromEntityMany(contacts);
  }
}
