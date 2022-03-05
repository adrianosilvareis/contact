import faker from 'faker';

import { Contact } from '@/contact/domain/entities/contact';
import { Email } from '@/core/email';

import { Builder } from '#/helper/builder';

export class ContactBuilder extends Builder<Contact, ContactBuilder> {
  public constructor() {
    super(ContactBuilder);
  }

  public buildDefault(): Contact {
    return Contact.create({
      name: faker.name.firstName(),
      email: Email.createFromString(faker.internet.email()),
      phoneNumber: faker.phone.phoneNumber(),
    });
  }
}
