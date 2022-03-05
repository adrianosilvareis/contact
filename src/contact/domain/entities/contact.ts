import { Email } from '@/core/email';
import { Entity } from '@/core/entity';

export interface ContactProps {
  name: string,
  email: Email | string,
  phoneNumber: string | null,
}

export class Contact extends Entity<ContactProps> implements ContactProps {
  public readonly name!: string;

  public readonly email!: Email;

  public readonly phoneNumber!: string;

  private constructor(
    props: ContactProps,
    _id?: string,
  ) {
    super(props, _id);
  }

  public static create(props: ContactProps, _id?: string): Contact {
    props.email = props.email instanceof Email ? props.email : Email.createFromString(props.email);
    return new Contact(props, _id);
  }
}
