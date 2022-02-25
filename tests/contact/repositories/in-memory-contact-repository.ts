import { Contact } from "../../../src/contact/domain/entities/contact";
import { ListContactRepository } from "../../../src/contact/domain/repositories/list-contact-repository";

export class InMemoryContactRepository implements ListContactRepository {
  public contacts: Contact[] = [];

  async listContacts(): Promise<Contact[]> {
    return this.contacts
  }
}