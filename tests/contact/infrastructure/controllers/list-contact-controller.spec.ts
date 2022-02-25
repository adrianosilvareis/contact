import { Response } from "express";
import { ListContactUseCase } from "../../../../src/contato/domain/use-case/list-contact-use-case";
import { ListContactController } from "../../../../src/contato/infrastructure/controllers/list-contact-controller";
import { ContactBuilder } from "../../builders/contact-builder";
import { InMemoryContactRepository } from "../../repositories/in-memory-contact-repository";
import { createResponse, MockResponse } from "node-mocks-http"
import { StatusCodes } from "http-status-codes"

describe('ListContactController', () => {
  it('should return Ok when get list of contacts', async () => { 
    // given
    const contacts = new ContactBuilder().buildMany();
    const repository = new InMemoryContactRepository()
    repository.contacts = contacts;
    const useCase = new ListContactUseCase(repository);
    const controller = new ListContactController(useCase);
    const response: MockResponse<Response> = createResponse();
    
    
    // When
    await controller.list(response)
    
    // then
    expect(response._getData()).toEqual(JSON.stringify(contacts));
    expect(response.statusCode).toEqual(StatusCodes.OK);
  });
});