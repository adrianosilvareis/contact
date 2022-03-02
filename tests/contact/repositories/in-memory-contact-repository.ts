import { Contact } from '@/contact/domain/entities/contact';
import { ListContactRepository } from '@/contact/domain/repositories/list-contact-repository';

export class InMemoryContactRepository implements ListContactRepository {
  public contacts: Contact[] = [];

  async listContacts(): Promise<Contact[]> {
    return this.contacts;
  }
}
