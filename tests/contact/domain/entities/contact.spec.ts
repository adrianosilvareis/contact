import { Contact } from '@/contact/domain/entities/contact';

import { ContactBuilder } from '#/contact/builders/contact-builder';

describe('Contact', () => {
  it('should create a new instance of contact', async () => {
    const instance = new ContactBuilder().build();

    expect(instance).toBeInstanceOf(Contact);
    expect(instance.id).toBeTruthy();
  });

  it('should create a new instance with specific name', async () => {
    const instance = new ContactBuilder().with('name', 'bob').build();

    expect(instance.name).toBe('bob');
  });
});
