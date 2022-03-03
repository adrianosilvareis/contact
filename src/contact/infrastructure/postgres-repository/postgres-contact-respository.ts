import { inject, injectable } from 'inversify';

import { Contact } from '@/contact/domain/entities/contact';
import { ListContactRepository } from '@/contact/domain/repositories/list-contact-repository';
import { DbClient } from '@/config/db-client';

@injectable()
export class PostgresContactRepository implements ListContactRepository {
  public constructor(@inject(DbClient) private client: DbClient) {}

  async getContacts(): Promise<Contact[]> {
    const contacts = await this.client.db.contact.findMany();
    return contacts.map(({ id, ...contact }) => Contact.create(contact, id));
  }
}
