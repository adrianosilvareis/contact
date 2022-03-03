import { Entity } from '@/core/entity';

export interface ContactProps {
  name: string,
  email: string,
  phoneNumber: string | null,
}

export class Contact extends Entity<ContactProps> implements ContactProps {
  public readonly name!: string;

  public readonly email!: string;

  public readonly phoneNumber!: string;

  private constructor(
    props: ContactProps,
    _id?: string,
  ) {
    super(props, _id);
  }

  public static create(props: ContactProps, _id?: string): Contact {
    return new Contact(props, _id);
  }
}
