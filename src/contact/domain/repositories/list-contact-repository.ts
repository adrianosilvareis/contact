import { Contact } from '@/contact/domain/entities/contact';

export interface ListContactRepository {
  listContacts(): Promise<Contact[]>
}
