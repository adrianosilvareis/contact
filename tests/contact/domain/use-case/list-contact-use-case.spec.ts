import { ListContactUseCase } from '@/contact/domain/use-case/list-contact-use-case';

import { InMemoryContactRepository } from '#/contact/stubs/in-memory-contact-repository';
import { ContactBuilder } from '#/contact/builders/contact-builder';

describe('ListContactUseCase', () => {
  it('should call emit success with list of contacts', async () => {
    // given
    const contacts = new ContactBuilder().buildMany();
    const repository = new InMemoryContactRepository();
    repository.contacts = contacts;
    const callback = jest.fn();

    // wen
    const sut = new ListContactUseCase(repository);
    sut.on('success', callback);
    await sut.handler();

    // then
    expect(callback).toHaveBeenCalledWith(contacts);
  });

  it('should throw when emit not found', async () => {
    // given
    const contacts = new ContactBuilder().buildMany();
    const repository = new InMemoryContactRepository();
    repository.contacts = contacts;

    // wen
    const sut = new ListContactUseCase(repository);
    const promise = sut.handler();

    // then
    await expect(promise).rejects.toThrowError('"success" not found!');
  });
});
