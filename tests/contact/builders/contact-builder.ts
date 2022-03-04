import faker from 'faker';
import { Contact as ContactDto } from '@prisma/client';

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

  public static toDto(contact: Contact): ContactDto {
    return {
      id: contact.id,
      name: contact.name,
      email: contact.email.toString(),
      phoneNumber: contact.phoneNumber,
    };
  }

  public static manyToDto(contacts: Contact[]): ContactDto[] {
    return contacts.map(ContactBuilder.toDto);
  }
}
