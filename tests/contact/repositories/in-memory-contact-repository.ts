import { Contact } from "../../../src/contato/domain/entities/contact";
import { ListContactRepository } from "../../../src/contato/domain/repositories/list-contact-repository";

export class InMemoryContactRepository implements ListContactRepository {
  public contacts: Contact[] = [];

  async listContacts(): Promise<Contact[]> {
    return this.contacts
  }
}