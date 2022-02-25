import { randomUUID }  from "crypto";

export class Entity<T> {
  private _id: string
  
  public constructor(props: T, _id?: string) {
    this._id = _id || randomUUID()
    Object.assign(this, props)
  }

  public get id(): string { return this._id }
}