import { Response } from 'express';
import { createResponse, MockResponse } from 'node-mocks-http';
import { StatusCodes } from 'http-status-codes';

import { ListContactUseCase } from '@/contact/domain/use-case/list-contact-use-case';
import { ListContactController } from '@/contact/infrastructure/controllers/list-contact-controller';

import { ContactBuilder } from '#/contact/builders/contact-builder';
import { InMemoryContactRepository } from '#/contact/repositories/in-memory-contact-repository';

describe('ListContactController', () => {
  it('should return Ok when get list of contacts', async () => {
    // given
    const contacts = new ContactBuilder().buildMany();
    const repository = new InMemoryContactRepository();
    repository.contacts = contacts;
    const useCase = new ListContactUseCase(repository);
    const controller = new ListContactController(useCase);
    const response: MockResponse<Response> = createResponse();

    // When
    await controller.list(response);

    // then
    // eslint-disable-next-line no-underscore-dangle
    expect(response._getData()).toEqual(JSON.stringify(contacts));
    expect(response.statusCode).toEqual(StatusCodes.OK);
  });
});
