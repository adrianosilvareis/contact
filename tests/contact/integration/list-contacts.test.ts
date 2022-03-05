/* eslint-disable global-require */
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

import { diContainer } from '@/config/di-container';
import { DbClient } from '@/config/db-client';
import { ContactParseDto } from '@/contact/infrastructure/parses/contact-parse-dto';

import { clientSpy, databaseMock } from '#/helper/database-mock';
import { ContactBuilder } from '#/contact/builders/contact-builder';

describe('ListContact', () => {
  beforeAll(() => {
    diContainer.rebind(DbClient).toConstantValue(databaseMock);
    require('@/load-modules').load('test', ['contact']);
  });

  it('should return a list of contacts', async () => {
    // given
    const contacts = new ContactBuilder().buildMany();
    clientSpy
      .contact
      .findMany
      .mockResolvedValue(ContactParseDto.to().parseMany(contacts));

    // when
    const response = await request(require('@/config/server').server)
      .get('/api/contacts');

    // when
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body).toEqual(contacts);
  });
});
