import { Contact } from "../../../src/contato/domain/entities/contact";
import { Builder } from "../../../src/core/builder";
import faker from "faker"

export class ContactBuilder extends Builder<Contact, ContactBuilder> {
  public constructor() {
    super(ContactBuilder);
  }

  public buildDefault(): Contact {
    return Contact.create({ 
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(), 
    });
  }
}
