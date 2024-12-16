export class ConflictError extends Error {}

export class ValidationError extends Error {
  public readonly errors: any[];

  constructor(msg: any, errors: any[]) {
    super(msg);
    this.errors = errors;
  }
}
