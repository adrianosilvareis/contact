import { mockReset } from 'jest-mock-extended';

import { PostgresContactRepository } from '@/contact/infrastructure/postgres-repository/postgres-contact-respository';
import { Contact } from '@/contact/domain/entities/contact';

import { databaseMock, clientSpy } from '#/contact/config/database-mock';
import { ContactBuilder } from '#/contact/builders/contact-builder';

describe('PostgresContactRepository', () => {
  beforeEach(() => {
    mockReset(databaseMock.db);
  });
  describe('ContactListRepository', () => {
    it('should return a list of contacts', async () => {
      clientSpy.contact.findMany.mockResolvedValue(new ContactBuilder().buildMany());

      const contactRepository = new PostgresContactRepository(databaseMock);
      const contacts = await contactRepository.getContacts();
      expect(contacts).toBeDefined();
      expect(contacts.length).toBeGreaterThan(0);
      expect(contacts[0]).toBeInstanceOf(Contact);
    });
  });
});
