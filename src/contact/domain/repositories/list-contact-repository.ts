import { injectable } from 'inversify';

import { Contact } from '@/contact/domain/entities/contact';

@injectable()
export abstract class ListContactRepository {
  abstract getContacts(): Promise<Contact[]>
}
