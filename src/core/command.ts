import { injectable } from 'inversify';

import { EventNotFoundError } from '@/erros/event-not-found-error';

@injectable()
export abstract class Command <T = unknown> {
  private events:{ [key:string]: (...args: any[]) => void } = {};

  public on(name: string, callback: (...args: any[]) => void):void {
    this.events[name] = callback;
  }

  protected emit(name: string, ...args: any[]): void {
    if (this.events[name] === undefined) {
      throw new EventNotFoundError(name);
    }
    this.events[name](...args);
    this.events = {};
  }

  public abstract handler(props?: T): Promise<void>
}
