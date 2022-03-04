import faker from 'faker';

import { Email } from '@/core/email';

describe('Email', () => {
  it('should have be valid email', () => {
    const address = faker.internet.email();

    const email = Email.createFromString(address);

    expect(email.isVerified).toBeTruthy();
  });

  it('should have be invalid email', () => {
    const address = faker.random.word();

    const email = Email.createFromString(address);

    expect(email.isVerified).toBeFalsy();
  });

  it('should can create with label', () => {
    const label = faker.random.word();
    const address = faker.internet.email();

    const email = Email.create({ address, label });

    expect(email.isVerified).toBeTruthy();
    expect(email.label).toBe(label);
    expect(email.address).toBe(address);
  });
});
