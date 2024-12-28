abstract class ValueObject {
  public equals(other: this) {
    return this.toString() === other.toString();
  }
}

class Email extends ValueObject {
  readonly email: string;

  constructor(email: string) {
    super();
    this.email = this.normalize(email);
    this.validate(this.email);
  }

  public validate(email: string): string {
    if (!email) {
      throw new Error("Email is empty");
    }

    return email;
  }

  public normalize(email: string): string {
    return email.trim().toLowerCase();
  }

  public toString() {
    return this.email;
  }

  public toJSON() {
    return this.email;
  }
}

class DTO<T> {
  constructor(private obj: T) {}

  public pick<K extends keyof T = never>(...keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach((key) => {
      result[key] = this.obj[key];
    });

    return result;
  }

  public omit<K extends keyof T = never>(...keys: K[]): Omit<T, K> {
    const result = { ...this.obj };
    keys.forEach((key) => {
      delete result[key];
    });

    return result;
  }
}

type FunctionProps<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type ClassProps<T> = Pick<T, Extract<FunctionProps<T>, keyof T>>;

class Entity {
  public map<T>(fn: (inst: ClassProps<this>) => T): DTO<T> {
    const dto = new DTO(fn(this.toPlain()));
    return dto;
  }

  static create<T extends Entity, A extends any[]>(
    this: new (...args: A) => T,
    ...args: A
  ): T {
    return new this(...args);
  }

  public toPlain(): ClassProps<this> {
    const plainObject = {} as ClassProps<this>;

    const prototype = Object.getPrototypeOf(this);
    const prototypeDescriptors = Object.getOwnPropertyDescriptors(prototype);
    const descriptors = Object.getOwnPropertyDescriptors(this);

    for (const [key, descriptor] of Object.entries({
      ...prototypeDescriptors,
      ...descriptors,
    })) {
      // Exclude private props
      if (key.startsWith("_")) continue;

      if (typeof descriptor.get === "function") {
        // Getters
        (plainObject as any)[key] = descriptor.get.call(this);
      } else if (
        descriptor.enumerable &&
        typeof this[key as keyof this] !== "function"
      ) {
        // Public props
        const value = this[key as keyof this];
        if (value instanceof ValueObject) {
          const clsName = value.constructor.name.toLowerCase();
          const items = Object.keys(value);

          /**
           * if the object contains more than 1 property, we place the entire object under the name of the class,
           * if only 1, then we place only it under the name of the class
           */
          const assignObject =
            items.length > 1
              ? {
                  [clsName]: { ...value },
                }
              : { ...value };

          Object.assign(plainObject, assignObject);
        } else {
          (plainObject as any)[key] = value;
        }
      }
    }

    return plainObject;
  }
}

class User extends Entity {
  private _age = 12;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: Email
  ) {
    super();
  }

  get age() {
    return this._age;
  }
}

const toDTO = (entity: ClassProps<User>) => ({
  fullName: `${entity.firstName} ${entity.lastName}`,
  ...entity,
});

const calculateProfits = (entity: User) => ({ ...entity, profit: 2.2 });

const instance = new User("Stan", "Sakun", new Email("stan@gmail.com"));
instance.toPlain();
const mapped = instance.map(toDTO).pick("firstName", "lastName");

console.log(mapped, "mapped");
