import email from 'email-validator';

export interface EmailProps {
  address: string;
  label?: string;
}

export class Email {
  public readonly address!: string;

  public readonly isVerified!: boolean;

  public readonly label!: string;

  private constructor(props: EmailProps) {
    this.address = props.address;
    this.isVerified = Email.validateAddress(props.address);
    this.label = props?.label ?? '';
  }

  public static create(props: EmailProps): Email {
    return new Email(props);
  }

  public static createFromString(address: string): Email {
    return new Email({ address });
  }

  public static validateAddress(address: string): boolean {
    return email.validate(address);
  }

  public toString(): string {
    return this.address;
  }
}
