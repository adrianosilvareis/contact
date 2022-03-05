import { Contact as ContactDto } from '@prisma/client';

import { Contact } from '@/contact/domain/entities/contact';
import { Email } from '@/core/email';
import { EntityParse } from '@/core/entity-parser';

export class ContactParseDto extends EntityParse<Contact, ContactDto> {
  public static to(): ContactParseDto {
    return new ContactParseDto();
  }

  public parse(entity: Contact): ContactDto {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email.toString(),
      phoneNumber: entity.phoneNumber,
    };
  }

  public parseFromEntity(value: ContactDto): Contact {
    return Contact.create({
      name: value.name,
      email: Email.createFromString(value.email),
      phoneNumber: value.phoneNumber,
    }, value.id);
  }
}
