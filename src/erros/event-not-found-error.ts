export class EventNotFoundError extends Error {
  public constructor(message: string) {
    super(`"${message}" not found!`);
    this.name = 'EventNotFoundError';
  }
}
