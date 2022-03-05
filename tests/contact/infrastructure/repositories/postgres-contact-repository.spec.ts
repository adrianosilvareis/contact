import { mockReset } from 'jest-mock-extended';

import { PostgresContactRepository } from '@/contact/infrastructure/postgres-repository/postgres-contact-respository';
import { Contact } from '@/contact/domain/entities/contact';
import { ContactParseDto } from '@/contact/infrastructure/parses/contact-parse-dto';

import { databaseMock, clientSpy } from '#/helper/database-mock';
import { ContactBuilder } from '#/contact/builders/contact-builder';

describe('PostgresContactRepository', () => {
  beforeEach(() => {
    mockReset(databaseMock.db);
  });
  describe('ContactListRepository', () => {
    it('should return a list of contacts', async () => {
      // given
      const contactsBuilder = new ContactBuilder().buildMany();
      clientSpy.contact.findMany.mockResolvedValue(ContactParseDto.to().parseMany(contactsBuilder));
      const contactRepository = new PostgresContactRepository(databaseMock);

      // when
      const contacts = await contactRepository.getContacts();

      // then
      expect(contacts).toBeDefined();
      expect(contacts.length).toBeGreaterThan(0);
      expect(contacts[0]).toBeInstanceOf(Contact);
    });
  });
});
