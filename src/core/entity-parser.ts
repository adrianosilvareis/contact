export abstract class EntityParse<T, S> {
  public abstract parse(entity: T): S;

  public abstract parseFromEntity(value: S): T;

  public parseMany(entities: T[]): S[] {
    return entities.map((entity) => this.parse(entity));
  }

  public parseFromEntityMany(values: S[]): T[] {
    return values.map((value) => this.parseFromEntity(value));
  }
}
