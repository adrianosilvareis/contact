import { Contact } from "../entities/contact";

export interface ListContactRepository {
  listContacts(): Promise<Contact[]>
}