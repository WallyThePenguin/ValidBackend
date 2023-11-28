
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Request
 * 
 */
export type Request = {
  id: number
  createdAt: Date
  updatedAt: Date | null
  location: string
  type: string
  price: string
  ownerId: number
  employeeId: number
  carId: number
  finished: boolean
  cancelled: boolean
  rating: string | null
}

/**
 * Model Car
 * 
 */
export type Car = {
  id: number
  ownerId: number
  make: string
  model: string
  year: number
  color: string
  plateNo: number
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  phonenumber: string
  pverify: boolean
  email: string
  everify: boolean
  code: string | null
  expiry: Date | null
  name: string | null
  password: string
}

/**
 * Model Employee
 * 
 */
export type Employee = {
  id: number
  phonenumber: string
  email: string
  rating: string
  name: string
  password: string
  working: boolean
  deployed: boolean
  location: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Requests
 * const requests = await prisma.request.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Requests
   * const requests = await prisma.request.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<GlobalReject>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.1
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Request: 'Request',
    Car: 'Car',
    User: 'User',
    Employee: 'Employee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarCountOutputType
   */


  export type CarCountOutputType = {
    request: number
  }

  export type CarCountOutputTypeSelect = {
    request?: boolean
  }

  export type CarCountOutputTypeGetPayload<S extends boolean | null | undefined | CarCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CarCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CarCountOutputTypeArgs)
    ? CarCountOutputType 
    : S extends { select: any } & (CarCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CarCountOutputType ? CarCountOutputType[P] : never
  } 
      : CarCountOutputType




  // Custom InputTypes

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    request: number
    car: number
  }

  export type UserCountOutputTypeSelect = {
    request?: boolean
    car?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type EmployeeCountOutputType
   */


  export type EmployeeCountOutputType = {
    request: number
  }

  export type EmployeeCountOutputTypeSelect = {
    request?: boolean
  }

  export type EmployeeCountOutputTypeGetPayload<S extends boolean | null | undefined | EmployeeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EmployeeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EmployeeCountOutputTypeArgs)
    ? EmployeeCountOutputType 
    : S extends { select: any } & (EmployeeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EmployeeCountOutputType ? EmployeeCountOutputType[P] : never
  } 
      : EmployeeCountOutputType




  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Request
   */


  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    employeeId: number | null
    carId: number | null
  }

  export type RequestSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    employeeId: number | null
    carId: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    type: string | null
    price: string | null
    ownerId: number | null
    employeeId: number | null
    carId: number | null
    finished: boolean | null
    cancelled: boolean | null
    rating: string | null
  }

  export type RequestMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    type: string | null
    price: string | null
    ownerId: number | null
    employeeId: number | null
    carId: number | null
    finished: boolean | null
    cancelled: boolean | null
    rating: string | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    location: number
    type: number
    price: number
    ownerId: number
    employeeId: number
    carId: number
    finished: number
    cancelled: number
    rating: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    id?: true
    ownerId?: true
    employeeId?: true
    carId?: true
  }

  export type RequestSumAggregateInputType = {
    id?: true
    ownerId?: true
    employeeId?: true
    carId?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    type?: true
    price?: true
    ownerId?: true
    employeeId?: true
    carId?: true
    finished?: true
    cancelled?: true
    rating?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    type?: true
    price?: true
    ownerId?: true
    employeeId?: true
    carId?: true
    finished?: true
    cancelled?: true
    rating?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    type?: true
    price?: true
    ownerId?: true
    employeeId?: true
    carId?: true
    finished?: true
    cancelled?: true
    rating?: true
    _all?: true
  }

  export type RequestAggregateArgs = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs = {
    where?: RequestWhereInput
    orderBy?: Enumerable<RequestOrderByWithAggregationInput>
    by: RequestScalarFieldEnum[]
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }


  export type RequestGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date | null
    location: string
    type: string
    price: string
    ownerId: number
    employeeId: number
    carId: number
    finished: boolean
    cancelled: boolean
    rating: string | null
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    type?: boolean
    price?: boolean
    ownerId?: boolean
    employeeId?: boolean
    carId?: boolean
    finished?: boolean
    cancelled?: boolean
    rating?: boolean
    owner?: boolean | UserArgs
    employee?: boolean | EmployeeArgs
    car?: boolean | CarArgs
  }


  export type RequestInclude = {
    owner?: boolean | UserArgs
    employee?: boolean | EmployeeArgs
    car?: boolean | CarArgs
  }

  export type RequestGetPayload<S extends boolean | null | undefined | RequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Request :
    S extends undefined ? never :
    S extends { include: any } & (RequestArgs | RequestFindManyArgs)
    ? Request  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'employee' ? EmployeeGetPayload<S['include'][P]> :
        P extends 'car' ? CarGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RequestArgs | RequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'employee' ? EmployeeGetPayload<S['select'][P]> :
        P extends 'car' ? CarGetPayload<S['select'][P]> :  P extends keyof Request ? Request[P] : never
  } 
      : Request


  type RequestCountArgs = 
    Omit<RequestFindManyArgs, 'select' | 'include'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Request'> extends True ? Prisma__RequestClient<RequestGetPayload<T>> : Prisma__RequestClient<RequestGetPayload<T> | null, null>

    /**
     * Find one Request that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RequestFindUniqueOrThrowArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Request'> extends True ? Prisma__RequestClient<RequestGetPayload<T>> : Prisma__RequestClient<RequestGetPayload<T> | null, null>

    /**
     * Find the first Request that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RequestFindFirstOrThrowArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RequestFindManyArgs>(
      args?: SelectSubset<T, RequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<RequestGetPayload<T>>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
    **/
    create<T extends RequestCreateArgs>(
      args: SelectSubset<T, RequestCreateArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Create many Requests.
     *     @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     *     @example
     *     // Create many Requests
     *     const request = await prisma.request.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestCreateManyArgs>(
      args?: SelectSubset<T, RequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
    **/
    delete<T extends RequestDeleteArgs>(
      args: SelectSubset<T, RequestDeleteArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestUpdateArgs>(
      args: SelectSubset<T, RequestUpdateArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestDeleteManyArgs>(
      args?: SelectSubset<T, RequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestUpdateManyArgs>(
      args: SelectSubset<T, RequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
    **/
    upsert<T extends RequestUpsertArgs>(
      args: SelectSubset<T, RequestUpsertArgs>
    ): Prisma__RequestClient<RequestGetPayload<T>>

    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    employee<T extends EmployeeArgs= {}>(args?: Subset<T, EmployeeArgs>): Prisma__EmployeeClient<EmployeeGetPayload<T> | Null>;

    car<T extends CarArgs= {}>(args?: Subset<T, CarArgs>): Prisma__CarClient<CarGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Request base type for findUnique actions
   */
  export type RequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUnique
   */
  export interface RequestFindUniqueArgs extends RequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request base type for findFirst actions
   */
  export type RequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: Enumerable<RequestScalarFieldEnum>
  }

  /**
   * Request findFirst
   */
  export interface RequestFindFirstArgs extends RequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: Enumerable<RequestScalarFieldEnum>
  }


  /**
   * Request findMany
   */
  export type RequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: Enumerable<RequestScalarFieldEnum>
  }


  /**
   * Request create
   */
  export type RequestCreateArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }


  /**
   * Request createMany
   */
  export type RequestCreateManyArgs = {
    /**
     * The data used to create many Requests.
     */
    data: Enumerable<RequestCreateManyInput>
  }


  /**
   * Request update
   */
  export type RequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
  }


  /**
   * Request upsert
   */
  export type RequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }


  /**
   * Request delete
   */
  export type RequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
  }


  /**
   * Request without action
   */
  export type RequestArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
  }



  /**
   * Model Car
   */


  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    year: number | null
    plateNo: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    year: number | null
    plateNo: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    make: string | null
    model: string | null
    year: number | null
    color: string | null
    plateNo: number | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    make: string | null
    model: string | null
    year: number | null
    color: string | null
    plateNo: number | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    ownerId: number
    make: number
    model: number
    year: number
    color: number
    plateNo: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    ownerId?: true
    year?: true
    plateNo?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    ownerId?: true
    year?: true
    plateNo?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    ownerId?: true
    make?: true
    model?: true
    year?: true
    color?: true
    plateNo?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    ownerId?: true
    make?: true
    model?: true
    year?: true
    color?: true
    plateNo?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    ownerId?: true
    make?: true
    model?: true
    year?: true
    color?: true
    plateNo?: true
    _all?: true
  }

  export type CarAggregateArgs = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: Enumerable<CarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs = {
    where?: CarWhereInput
    orderBy?: Enumerable<CarOrderByWithAggregationInput>
    by: CarScalarFieldEnum[]
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }


  export type CarGroupByOutputType = {
    id: number
    ownerId: number
    make: string
    model: string
    year: number
    color: string
    plateNo: number
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect = {
    id?: boolean
    ownerId?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    plateNo?: boolean
    owner?: boolean | UserArgs
    request?: boolean | Car$requestArgs
    _count?: boolean | CarCountOutputTypeArgs
  }


  export type CarInclude = {
    owner?: boolean | UserArgs
    request?: boolean | Car$requestArgs
    _count?: boolean | CarCountOutputTypeArgs
  }

  export type CarGetPayload<S extends boolean | null | undefined | CarArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Car :
    S extends undefined ? never :
    S extends { include: any } & (CarArgs | CarFindManyArgs)
    ? Car  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'request' ? Array < RequestGetPayload<S['include'][P]>>  :
        P extends '_count' ? CarCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CarArgs | CarFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'request' ? Array < RequestGetPayload<S['select'][P]>>  :
        P extends '_count' ? CarCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Car ? Car[P] : never
  } 
      : Car


  type CarCountArgs = 
    Omit<CarFindManyArgs, 'select' | 'include'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CarFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Car'> extends True ? Prisma__CarClient<CarGetPayload<T>> : Prisma__CarClient<CarGetPayload<T> | null, null>

    /**
     * Find one Car that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CarFindUniqueOrThrowArgs>
    ): Prisma__CarClient<CarGetPayload<T>>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CarFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Car'> extends True ? Prisma__CarClient<CarGetPayload<T>> : Prisma__CarClient<CarGetPayload<T> | null, null>

    /**
     * Find the first Car that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CarFindFirstOrThrowArgs>
    ): Prisma__CarClient<CarGetPayload<T>>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CarFindManyArgs>(
      args?: SelectSubset<T, CarFindManyArgs>
    ): Prisma.PrismaPromise<Array<CarGetPayload<T>>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
    **/
    create<T extends CarCreateArgs>(
      args: SelectSubset<T, CarCreateArgs>
    ): Prisma__CarClient<CarGetPayload<T>>

    /**
     * Create many Cars.
     *     @param {CarCreateManyArgs} args - Arguments to create many Cars.
     *     @example
     *     // Create many Cars
     *     const car = await prisma.car.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarCreateManyArgs>(
      args?: SelectSubset<T, CarCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
    **/
    delete<T extends CarDeleteArgs>(
      args: SelectSubset<T, CarDeleteArgs>
    ): Prisma__CarClient<CarGetPayload<T>>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarUpdateArgs>(
      args: SelectSubset<T, CarUpdateArgs>
    ): Prisma__CarClient<CarGetPayload<T>>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarDeleteManyArgs>(
      args?: SelectSubset<T, CarDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarUpdateManyArgs>(
      args: SelectSubset<T, CarUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
    **/
    upsert<T extends CarUpsertArgs>(
      args: SelectSubset<T, CarUpsertArgs>
    ): Prisma__CarClient<CarGetPayload<T>>

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CarClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    request<T extends Car$requestArgs= {}>(args?: Subset<T, Car$requestArgs>): Prisma.PrismaPromise<Array<RequestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Car base type for findUnique actions
   */
  export type CarFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUnique
   */
  export interface CarFindUniqueArgs extends CarFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }


  /**
   * Car base type for findFirst actions
   */
  export type CarFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: Enumerable<CarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: Enumerable<CarScalarFieldEnum>
  }

  /**
   * Car findFirst
   */
  export interface CarFindFirstArgs extends CarFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: Enumerable<CarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: Enumerable<CarScalarFieldEnum>
  }


  /**
   * Car findMany
   */
  export type CarFindManyArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: Enumerable<CarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: Enumerable<CarScalarFieldEnum>
  }


  /**
   * Car create
   */
  export type CarCreateArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }


  /**
   * Car createMany
   */
  export type CarCreateManyArgs = {
    /**
     * The data used to create many Cars.
     */
    data: Enumerable<CarCreateManyInput>
  }


  /**
   * Car update
   */
  export type CarUpdateArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }


  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
  }


  /**
   * Car upsert
   */
  export type CarUpsertArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }


  /**
   * Car delete
   */
  export type CarDeleteArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }


  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
  }


  /**
   * Car.request
   */
  export type Car$requestArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    where?: RequestWhereInput
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RequestScalarFieldEnum>
  }


  /**
   * Car without action
   */
  export type CarArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    phonenumber: string | null
    pverify: boolean | null
    email: string | null
    everify: boolean | null
    code: string | null
    expiry: Date | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    phonenumber: string | null
    pverify: boolean | null
    email: string | null
    everify: boolean | null
    code: string | null
    expiry: Date | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phonenumber: number
    pverify: number
    email: number
    everify: number
    code: number
    expiry: number
    name: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phonenumber?: true
    pverify?: true
    email?: true
    everify?: true
    code?: true
    expiry?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phonenumber?: true
    pverify?: true
    email?: true
    everify?: true
    code?: true
    expiry?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phonenumber?: true
    pverify?: true
    email?: true
    everify?: true
    code?: true
    expiry?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    phonenumber: string
    pverify: boolean
    email: string
    everify: boolean
    code: string | null
    expiry: Date | null
    name: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    phonenumber?: boolean
    pverify?: boolean
    email?: boolean
    everify?: boolean
    code?: boolean
    expiry?: boolean
    name?: boolean
    password?: boolean
    request?: boolean | User$requestArgs
    car?: boolean | User$carArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    request?: boolean | User$requestArgs
    car?: boolean | User$carArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'request' ? Array < RequestGetPayload<S['include'][P]>>  :
        P extends 'car' ? Array < CarGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'request' ? Array < RequestGetPayload<S['select'][P]>>  :
        P extends 'car' ? Array < CarGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    request<T extends User$requestArgs= {}>(args?: Subset<T, User$requestArgs>): Prisma.PrismaPromise<Array<RequestGetPayload<T>>| Null>;

    car<T extends User$carArgs= {}>(args?: Subset<T, User$carArgs>): Prisma.PrismaPromise<Array<CarGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.request
   */
  export type User$requestArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    where?: RequestWhereInput
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RequestScalarFieldEnum>
  }


  /**
   * User.car
   */
  export type User$carArgs = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarInclude | null
    where?: CarWhereInput
    orderBy?: Enumerable<CarOrderByWithRelationInput>
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CarScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Employee
   */


  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    phonenumber: string | null
    email: string | null
    rating: string | null
    name: string | null
    password: string | null
    working: boolean | null
    deployed: boolean | null
    location: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    phonenumber: string | null
    email: string | null
    rating: string | null
    name: string | null
    password: string | null
    working: boolean | null
    deployed: boolean | null
    location: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    phonenumber: number
    email: number
    rating: number
    name: number
    password: number
    working: number
    deployed: number
    location: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    phonenumber?: true
    email?: true
    rating?: true
    name?: true
    password?: true
    working?: true
    deployed?: true
    location?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    phonenumber?: true
    email?: true
    rating?: true
    name?: true
    password?: true
    working?: true
    deployed?: true
    location?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    phonenumber?: true
    email?: true
    rating?: true
    name?: true
    password?: true
    working?: true
    deployed?: true
    location?: true
    _all?: true
  }

  export type EmployeeAggregateArgs = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs = {
    where?: EmployeeWhereInput
    orderBy?: Enumerable<EmployeeOrderByWithAggregationInput>
    by: EmployeeScalarFieldEnum[]
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }


  export type EmployeeGroupByOutputType = {
    id: number
    phonenumber: string
    email: string
    rating: string
    name: string
    password: string
    working: boolean
    deployed: boolean
    location: string | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect = {
    id?: boolean
    phonenumber?: boolean
    email?: boolean
    rating?: boolean
    name?: boolean
    password?: boolean
    working?: boolean
    deployed?: boolean
    location?: boolean
    request?: boolean | Employee$requestArgs
    _count?: boolean | EmployeeCountOutputTypeArgs
  }


  export type EmployeeInclude = {
    request?: boolean | Employee$requestArgs
    _count?: boolean | EmployeeCountOutputTypeArgs
  }

  export type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Employee :
    S extends undefined ? never :
    S extends { include: any } & (EmployeeArgs | EmployeeFindManyArgs)
    ? Employee  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'request' ? Array < RequestGetPayload<S['include'][P]>>  :
        P extends '_count' ? EmployeeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EmployeeArgs | EmployeeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'request' ? Array < RequestGetPayload<S['select'][P]>>  :
        P extends '_count' ? EmployeeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Employee ? Employee[P] : never
  } 
      : Employee


  type EmployeeCountArgs = 
    Omit<EmployeeFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Employee'> extends True ? Prisma__EmployeeClient<EmployeeGetPayload<T>> : Prisma__EmployeeClient<EmployeeGetPayload<T> | null, null>

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EmployeeFindUniqueOrThrowArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Employee'> extends True ? Prisma__EmployeeClient<EmployeeGetPayload<T>> : Prisma__EmployeeClient<EmployeeGetPayload<T> | null, null>

    /**
     * Find the first Employee that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeFindManyArgs>(
      args?: SelectSubset<T, EmployeeFindManyArgs>
    ): Prisma.PrismaPromise<Array<EmployeeGetPayload<T>>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends EmployeeCreateArgs>(
      args: SelectSubset<T, EmployeeCreateArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Create many Employees.
     *     @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeCreateManyArgs>(
      args?: SelectSubset<T, EmployeeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeDeleteArgs>(
      args: SelectSubset<T, EmployeeDeleteArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeUpdateArgs>(
      args: SelectSubset<T, EmployeeUpdateArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeUpdateManyArgs>(
      args: SelectSubset<T, EmployeeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeUpsertArgs>(
      args: SelectSubset<T, EmployeeUpsertArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    request<T extends Employee$requestArgs= {}>(args?: Subset<T, Employee$requestArgs>): Prisma.PrismaPromise<Array<RequestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Employee base type for findUnique actions
   */
  export type EmployeeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUnique
   */
  export interface EmployeeFindUniqueArgs extends EmployeeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee base type for findFirst actions
   */
  export type EmployeeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }

  /**
   * Employee findFirst
   */
  export interface EmployeeFindFirstArgs extends EmployeeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * Employee create
   */
  export type EmployeeCreateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }


  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs = {
    /**
     * The data used to create many Employees.
     */
    data: Enumerable<EmployeeCreateManyInput>
  }


  /**
   * Employee update
   */
  export type EmployeeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }


  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee.request
   */
  export type Employee$requestArgs = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude | null
    where?: RequestWhereInput
    orderBy?: Enumerable<RequestOrderByWithRelationInput>
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RequestScalarFieldEnum>
  }


  /**
   * Employee without action
   */
  export type EmployeeArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CarScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    make: 'make',
    model: 'model',
    year: 'year',
    color: 'color',
    plateNo: 'plateNo'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    phonenumber: 'phonenumber',
    email: 'email',
    rating: 'rating',
    name: 'name',
    password: 'password',
    working: 'working',
    deployed: 'deployed',
    location: 'location'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    location: 'location',
    type: 'type',
    price: 'price',
    ownerId: 'ownerId',
    employeeId: 'employeeId',
    carId: 'carId',
    finished: 'finished',
    cancelled: 'cancelled',
    rating: 'rating'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phonenumber: 'phonenumber',
    pverify: 'pverify',
    email: 'email',
    everify: 'everify',
    code: 'code',
    expiry: 'expiry',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type RequestWhereInput = {
    AND?: Enumerable<RequestWhereInput>
    OR?: Enumerable<RequestWhereInput>
    NOT?: Enumerable<RequestWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    location?: StringFilter | string
    type?: StringFilter | string
    price?: StringFilter | string
    ownerId?: IntFilter | number
    employeeId?: IntFilter | number
    carId?: IntFilter | number
    finished?: BoolFilter | boolean
    cancelled?: BoolFilter | boolean
    rating?: StringNullableFilter | string | null
    owner?: XOR<UserRelationFilter, UserWhereInput>
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
    car?: XOR<CarRelationFilter, CarWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    type?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    employeeId?: SortOrder
    carId?: SortOrder
    finished?: SortOrder
    cancelled?: SortOrder
    rating?: SortOrder
    owner?: UserOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = {
    id?: number
  }

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    type?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    employeeId?: SortOrder
    carId?: SortOrder
    finished?: SortOrder
    cancelled?: SortOrder
    rating?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<RequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RequestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    location?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    price?: StringWithAggregatesFilter | string
    ownerId?: IntWithAggregatesFilter | number
    employeeId?: IntWithAggregatesFilter | number
    carId?: IntWithAggregatesFilter | number
    finished?: BoolWithAggregatesFilter | boolean
    cancelled?: BoolWithAggregatesFilter | boolean
    rating?: StringNullableWithAggregatesFilter | string | null
  }

  export type CarWhereInput = {
    AND?: Enumerable<CarWhereInput>
    OR?: Enumerable<CarWhereInput>
    NOT?: Enumerable<CarWhereInput>
    id?: IntFilter | number
    ownerId?: IntFilter | number
    make?: StringFilter | string
    model?: StringFilter | string
    year?: IntFilter | number
    color?: StringFilter | string
    plateNo?: IntFilter | number
    owner?: XOR<UserRelationFilter, UserWhereInput>
    request?: RequestListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    plateNo?: SortOrder
    owner?: UserOrderByWithRelationInput
    request?: RequestOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = {
    id?: number
  }

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    plateNo?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CarScalarWhereWithAggregatesInput>
    OR?: Enumerable<CarScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CarScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    ownerId?: IntWithAggregatesFilter | number
    make?: StringWithAggregatesFilter | string
    model?: StringWithAggregatesFilter | string
    year?: IntWithAggregatesFilter | number
    color?: StringWithAggregatesFilter | string
    plateNo?: IntWithAggregatesFilter | number
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    phonenumber?: StringFilter | string
    pverify?: BoolFilter | boolean
    email?: StringFilter | string
    everify?: BoolFilter | boolean
    code?: StringNullableFilter | string | null
    expiry?: DateTimeNullableFilter | Date | string | null
    name?: StringNullableFilter | string | null
    password?: StringFilter | string
    request?: RequestListRelationFilter
    car?: CarListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    pverify?: SortOrder
    email?: SortOrder
    everify?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    name?: SortOrder
    password?: SortOrder
    request?: RequestOrderByRelationAggregateInput
    car?: CarOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    pverify?: SortOrder
    email?: SortOrder
    everify?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    phonenumber?: StringWithAggregatesFilter | string
    pverify?: BoolWithAggregatesFilter | boolean
    email?: StringWithAggregatesFilter | string
    everify?: BoolWithAggregatesFilter | boolean
    code?: StringNullableWithAggregatesFilter | string | null
    expiry?: DateTimeNullableWithAggregatesFilter | Date | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    password?: StringWithAggregatesFilter | string
  }

  export type EmployeeWhereInput = {
    AND?: Enumerable<EmployeeWhereInput>
    OR?: Enumerable<EmployeeWhereInput>
    NOT?: Enumerable<EmployeeWhereInput>
    id?: IntFilter | number
    phonenumber?: StringFilter | string
    email?: StringFilter | string
    rating?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    working?: BoolFilter | boolean
    deployed?: BoolFilter | boolean
    location?: StringNullableFilter | string | null
    request?: RequestListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    rating?: SortOrder
    name?: SortOrder
    password?: SortOrder
    working?: SortOrder
    deployed?: SortOrder
    location?: SortOrder
    request?: RequestOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = {
    id?: number
    phonenumber?: string
    email?: string
  }

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    rating?: SortOrder
    name?: SortOrder
    password?: SortOrder
    working?: SortOrder
    deployed?: SortOrder
    location?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    phonenumber?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    rating?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    working?: BoolWithAggregatesFilter | boolean
    deployed?: BoolWithAggregatesFilter | boolean
    location?: StringNullableWithAggregatesFilter | string | null
  }

  export type RequestCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
    owner: UserCreateNestedOneWithoutRequestInput
    employee: EmployeeCreateNestedOneWithoutRequestInput
    car: CarCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    ownerId: number
    employeeId: number
    carId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type RequestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutRequestNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutRequestNestedInput
    car?: CarUpdateOneRequiredWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    ownerId: number
    employeeId: number
    carId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type RequestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarCreateInput = {
    make: string
    model: string
    year: number
    color: string
    plateNo: number
    owner: UserCreateNestedOneWithoutCarInput
    request?: RequestCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    ownerId: number
    make: string
    model: string
    year: number
    color: string
    plateNo: number
    request?: RequestUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutCarNestedInput
    request?: RequestUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
    request?: RequestUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    ownerId: number
    make: string
    model: string
    year: number
    color: string
    plateNo: number
  }

  export type CarUpdateManyMutationInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    phonenumber: string
    pverify?: boolean
    email: string
    everify?: boolean
    code?: string | null
    expiry?: Date | string | null
    name?: string | null
    password: string
    request?: RequestCreateNestedManyWithoutOwnerInput
    car?: CarCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    phonenumber: string
    pverify?: boolean
    email: string
    everify?: boolean
    code?: string | null
    expiry?: Date | string | null
    name?: string | null
    password: string
    request?: RequestUncheckedCreateNestedManyWithoutOwnerInput
    car?: CarUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    request?: RequestUpdateManyWithoutOwnerNestedInput
    car?: CarUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    request?: RequestUncheckedUpdateManyWithoutOwnerNestedInput
    car?: CarUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    phonenumber: string
    pverify?: boolean
    email: string
    everify?: boolean
    code?: string | null
    expiry?: Date | string | null
    name?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    phonenumber: string
    email: string
    rating?: string
    name: string
    password: string
    working?: boolean
    deployed?: boolean
    location?: string | null
    request?: RequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    phonenumber: string
    email: string
    rating?: string
    name: string
    password: string
    working?: boolean
    deployed?: boolean
    location?: string | null
    request?: RequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    working?: BoolFieldUpdateOperationsInput | boolean
    deployed?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    request?: RequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phonenumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    working?: BoolFieldUpdateOperationsInput | boolean
    deployed?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    request?: RequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    phonenumber: string
    email: string
    rating?: string
    name: string
    password: string
    working?: boolean
    deployed?: boolean
    location?: string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    working?: BoolFieldUpdateOperationsInput | boolean
    deployed?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phonenumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    working?: BoolFieldUpdateOperationsInput | boolean
    deployed?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type CarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    type?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    employeeId?: SortOrder
    carId?: SortOrder
    finished?: SortOrder
    cancelled?: SortOrder
    rating?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    employeeId?: SortOrder
    carId?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    type?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    employeeId?: SortOrder
    carId?: SortOrder
    finished?: SortOrder
    cancelled?: SortOrder
    rating?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    type?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
    employeeId?: SortOrder
    carId?: SortOrder
    finished?: SortOrder
    cancelled?: SortOrder
    rating?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    employeeId?: SortOrder
    carId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    plateNo?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    plateNo?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    plateNo?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    plateNo?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    year?: SortOrder
    plateNo?: SortOrder
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    pverify?: SortOrder
    email?: SortOrder
    everify?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    pverify?: SortOrder
    email?: SortOrder
    everify?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    pverify?: SortOrder
    email?: SortOrder
    everify?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    rating?: SortOrder
    name?: SortOrder
    password?: SortOrder
    working?: SortOrder
    deployed?: SortOrder
    location?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    rating?: SortOrder
    name?: SortOrder
    password?: SortOrder
    working?: SortOrder
    deployed?: SortOrder
    location?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    rating?: SortOrder
    name?: SortOrder
    password?: SortOrder
    working?: SortOrder
    deployed?: SortOrder
    location?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutRequestInput = {
    create?: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestInput
    connect?: UserWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutRequestInput = {
    create?: XOR<EmployeeCreateWithoutRequestInput, EmployeeUncheckedCreateWithoutRequestInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRequestInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutRequestInput = {
    create?: XOR<CarCreateWithoutRequestInput, CarUncheckedCreateWithoutRequestInput>
    connectOrCreate?: CarCreateOrConnectWithoutRequestInput
    connect?: CarWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestInput
    upsert?: UserUpsertWithoutRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRequestInput, UserUncheckedUpdateWithoutRequestInput>
  }

  export type EmployeeUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<EmployeeCreateWithoutRequestInput, EmployeeUncheckedCreateWithoutRequestInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRequestInput
    upsert?: EmployeeUpsertWithoutRequestInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<EmployeeUpdateWithoutRequestInput, EmployeeUncheckedUpdateWithoutRequestInput>
  }

  export type CarUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<CarCreateWithoutRequestInput, CarUncheckedCreateWithoutRequestInput>
    connectOrCreate?: CarCreateOrConnectWithoutRequestInput
    upsert?: CarUpsertWithoutRequestInput
    connect?: CarWhereUniqueInput
    update?: XOR<CarUpdateWithoutRequestInput, CarUncheckedUpdateWithoutRequestInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutCarInput = {
    create?: XOR<UserCreateWithoutCarInput, UserUncheckedCreateWithoutCarInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarInput
    connect?: UserWhereUniqueInput
  }

  export type RequestCreateNestedManyWithoutCarInput = {
    create?: XOR<Enumerable<RequestCreateWithoutCarInput>, Enumerable<RequestUncheckedCreateWithoutCarInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutCarInput>
    createMany?: RequestCreateManyCarInputEnvelope
    connect?: Enumerable<RequestWhereUniqueInput>
  }

  export type RequestUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Enumerable<RequestCreateWithoutCarInput>, Enumerable<RequestUncheckedCreateWithoutCarInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutCarInput>
    createMany?: RequestCreateManyCarInputEnvelope
    connect?: Enumerable<RequestWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<UserCreateWithoutCarInput, UserUncheckedCreateWithoutCarInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarInput
    upsert?: UserUpsertWithoutCarInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCarInput, UserUncheckedUpdateWithoutCarInput>
  }

  export type RequestUpdateManyWithoutCarNestedInput = {
    create?: XOR<Enumerable<RequestCreateWithoutCarInput>, Enumerable<RequestUncheckedCreateWithoutCarInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutCarInput>
    upsert?: Enumerable<RequestUpsertWithWhereUniqueWithoutCarInput>
    createMany?: RequestCreateManyCarInputEnvelope
    set?: Enumerable<RequestWhereUniqueInput>
    disconnect?: Enumerable<RequestWhereUniqueInput>
    delete?: Enumerable<RequestWhereUniqueInput>
    connect?: Enumerable<RequestWhereUniqueInput>
    update?: Enumerable<RequestUpdateWithWhereUniqueWithoutCarInput>
    updateMany?: Enumerable<RequestUpdateManyWithWhereWithoutCarInput>
    deleteMany?: Enumerable<RequestScalarWhereInput>
  }

  export type RequestUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Enumerable<RequestCreateWithoutCarInput>, Enumerable<RequestUncheckedCreateWithoutCarInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutCarInput>
    upsert?: Enumerable<RequestUpsertWithWhereUniqueWithoutCarInput>
    createMany?: RequestCreateManyCarInputEnvelope
    set?: Enumerable<RequestWhereUniqueInput>
    disconnect?: Enumerable<RequestWhereUniqueInput>
    delete?: Enumerable<RequestWhereUniqueInput>
    connect?: Enumerable<RequestWhereUniqueInput>
    update?: Enumerable<RequestUpdateWithWhereUniqueWithoutCarInput>
    updateMany?: Enumerable<RequestUpdateManyWithWhereWithoutCarInput>
    deleteMany?: Enumerable<RequestScalarWhereInput>
  }

  export type RequestCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<RequestCreateWithoutOwnerInput>, Enumerable<RequestUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutOwnerInput>
    createMany?: RequestCreateManyOwnerInputEnvelope
    connect?: Enumerable<RequestWhereUniqueInput>
  }

  export type CarCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CarCreateWithoutOwnerInput>, Enumerable<CarUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CarCreateOrConnectWithoutOwnerInput>
    createMany?: CarCreateManyOwnerInputEnvelope
    connect?: Enumerable<CarWhereUniqueInput>
  }

  export type RequestUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<RequestCreateWithoutOwnerInput>, Enumerable<RequestUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutOwnerInput>
    createMany?: RequestCreateManyOwnerInputEnvelope
    connect?: Enumerable<RequestWhereUniqueInput>
  }

  export type CarUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CarCreateWithoutOwnerInput>, Enumerable<CarUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CarCreateOrConnectWithoutOwnerInput>
    createMany?: CarCreateManyOwnerInputEnvelope
    connect?: Enumerable<CarWhereUniqueInput>
  }

  export type RequestUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<RequestCreateWithoutOwnerInput>, Enumerable<RequestUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<RequestUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: RequestCreateManyOwnerInputEnvelope
    set?: Enumerable<RequestWhereUniqueInput>
    disconnect?: Enumerable<RequestWhereUniqueInput>
    delete?: Enumerable<RequestWhereUniqueInput>
    connect?: Enumerable<RequestWhereUniqueInput>
    update?: Enumerable<RequestUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<RequestUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<RequestScalarWhereInput>
  }

  export type CarUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<CarCreateWithoutOwnerInput>, Enumerable<CarUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CarCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CarUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CarCreateManyOwnerInputEnvelope
    set?: Enumerable<CarWhereUniqueInput>
    disconnect?: Enumerable<CarWhereUniqueInput>
    delete?: Enumerable<CarWhereUniqueInput>
    connect?: Enumerable<CarWhereUniqueInput>
    update?: Enumerable<CarUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CarUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CarScalarWhereInput>
  }

  export type RequestUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<RequestCreateWithoutOwnerInput>, Enumerable<RequestUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<RequestUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: RequestCreateManyOwnerInputEnvelope
    set?: Enumerable<RequestWhereUniqueInput>
    disconnect?: Enumerable<RequestWhereUniqueInput>
    delete?: Enumerable<RequestWhereUniqueInput>
    connect?: Enumerable<RequestWhereUniqueInput>
    update?: Enumerable<RequestUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<RequestUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<RequestScalarWhereInput>
  }

  export type CarUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<CarCreateWithoutOwnerInput>, Enumerable<CarUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CarCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CarUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CarCreateManyOwnerInputEnvelope
    set?: Enumerable<CarWhereUniqueInput>
    disconnect?: Enumerable<CarWhereUniqueInput>
    delete?: Enumerable<CarWhereUniqueInput>
    connect?: Enumerable<CarWhereUniqueInput>
    update?: Enumerable<CarUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CarUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CarScalarWhereInput>
  }

  export type RequestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<RequestCreateWithoutEmployeeInput>, Enumerable<RequestUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutEmployeeInput>
    createMany?: RequestCreateManyEmployeeInputEnvelope
    connect?: Enumerable<RequestWhereUniqueInput>
  }

  export type RequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<RequestCreateWithoutEmployeeInput>, Enumerable<RequestUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutEmployeeInput>
    createMany?: RequestCreateManyEmployeeInputEnvelope
    connect?: Enumerable<RequestWhereUniqueInput>
  }

  export type RequestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Enumerable<RequestCreateWithoutEmployeeInput>, Enumerable<RequestUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<RequestUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: RequestCreateManyEmployeeInputEnvelope
    set?: Enumerable<RequestWhereUniqueInput>
    disconnect?: Enumerable<RequestWhereUniqueInput>
    delete?: Enumerable<RequestWhereUniqueInput>
    connect?: Enumerable<RequestWhereUniqueInput>
    update?: Enumerable<RequestUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<RequestUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<RequestScalarWhereInput>
  }

  export type RequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Enumerable<RequestCreateWithoutEmployeeInput>, Enumerable<RequestUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<RequestCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<RequestUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: RequestCreateManyEmployeeInputEnvelope
    set?: Enumerable<RequestWhereUniqueInput>
    disconnect?: Enumerable<RequestWhereUniqueInput>
    delete?: Enumerable<RequestWhereUniqueInput>
    connect?: Enumerable<RequestWhereUniqueInput>
    update?: Enumerable<RequestUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<RequestUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<RequestScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserCreateWithoutRequestInput = {
    phonenumber: string
    pverify?: boolean
    email: string
    everify?: boolean
    code?: string | null
    expiry?: Date | string | null
    name?: string | null
    password: string
    car?: CarCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutRequestInput = {
    id?: number
    phonenumber: string
    pverify?: boolean
    email: string
    everify?: boolean
    code?: string | null
    expiry?: Date | string | null
    name?: string | null
    password: string
    car?: CarUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
  }

  export type EmployeeCreateWithoutRequestInput = {
    phonenumber: string
    email: string
    rating?: string
    name: string
    password: string
    working?: boolean
    deployed?: boolean
    location?: string | null
  }

  export type EmployeeUncheckedCreateWithoutRequestInput = {
    id?: number
    phonenumber: string
    email: string
    rating?: string
    name: string
    password: string
    working?: boolean
    deployed?: boolean
    location?: string | null
  }

  export type EmployeeCreateOrConnectWithoutRequestInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutRequestInput, EmployeeUncheckedCreateWithoutRequestInput>
  }

  export type CarCreateWithoutRequestInput = {
    make: string
    model: string
    year: number
    color: string
    plateNo: number
    owner: UserCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateWithoutRequestInput = {
    id?: number
    ownerId: number
    make: string
    model: string
    year: number
    color: string
    plateNo: number
  }

  export type CarCreateOrConnectWithoutRequestInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutRequestInput, CarUncheckedCreateWithoutRequestInput>
  }

  export type UserUpsertWithoutRequestInput = {
    update: XOR<UserUpdateWithoutRequestInput, UserUncheckedUpdateWithoutRequestInput>
    create: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
  }

  export type UserUpdateWithoutRequestInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    car?: CarUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    car?: CarUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type EmployeeUpsertWithoutRequestInput = {
    update: XOR<EmployeeUpdateWithoutRequestInput, EmployeeUncheckedUpdateWithoutRequestInput>
    create: XOR<EmployeeCreateWithoutRequestInput, EmployeeUncheckedCreateWithoutRequestInput>
  }

  export type EmployeeUpdateWithoutRequestInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    working?: BoolFieldUpdateOperationsInput | boolean
    deployed?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    phonenumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    working?: BoolFieldUpdateOperationsInput | boolean
    deployed?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarUpsertWithoutRequestInput = {
    update: XOR<CarUpdateWithoutRequestInput, CarUncheckedUpdateWithoutRequestInput>
    create: XOR<CarCreateWithoutRequestInput, CarUncheckedCreateWithoutRequestInput>
  }

  export type CarUpdateWithoutRequestInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutCarInput = {
    phonenumber: string
    pverify?: boolean
    email: string
    everify?: boolean
    code?: string | null
    expiry?: Date | string | null
    name?: string | null
    password: string
    request?: RequestCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCarInput = {
    id?: number
    phonenumber: string
    pverify?: boolean
    email: string
    everify?: boolean
    code?: string | null
    expiry?: Date | string | null
    name?: string | null
    password: string
    request?: RequestUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarInput, UserUncheckedCreateWithoutCarInput>
  }

  export type RequestCreateWithoutCarInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
    owner: UserCreateNestedOneWithoutRequestInput
    employee: EmployeeCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutCarInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    ownerId: number
    employeeId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type RequestCreateOrConnectWithoutCarInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutCarInput, RequestUncheckedCreateWithoutCarInput>
  }

  export type RequestCreateManyCarInputEnvelope = {
    data: Enumerable<RequestCreateManyCarInput>
  }

  export type UserUpsertWithoutCarInput = {
    update: XOR<UserUpdateWithoutCarInput, UserUncheckedUpdateWithoutCarInput>
    create: XOR<UserCreateWithoutCarInput, UserUncheckedCreateWithoutCarInput>
  }

  export type UserUpdateWithoutCarInput = {
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    request?: RequestUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    phonenumber?: StringFieldUpdateOperationsInput | string
    pverify?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    everify?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableStringFieldUpdateOperationsInput | string | null
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    request?: RequestUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type RequestUpsertWithWhereUniqueWithoutCarInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutCarInput, RequestUncheckedUpdateWithoutCarInput>
    create: XOR<RequestCreateWithoutCarInput, RequestUncheckedCreateWithoutCarInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutCarInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutCarInput, RequestUncheckedUpdateWithoutCarInput>
  }

  export type RequestUpdateManyWithWhereWithoutCarInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestScalarWhereInput = {
    AND?: Enumerable<RequestScalarWhereInput>
    OR?: Enumerable<RequestScalarWhereInput>
    NOT?: Enumerable<RequestScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    location?: StringFilter | string
    type?: StringFilter | string
    price?: StringFilter | string
    ownerId?: IntFilter | number
    employeeId?: IntFilter | number
    carId?: IntFilter | number
    finished?: BoolFilter | boolean
    cancelled?: BoolFilter | boolean
    rating?: StringNullableFilter | string | null
  }

  export type RequestCreateWithoutOwnerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
    employee: EmployeeCreateNestedOneWithoutRequestInput
    car: CarCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutOwnerInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    employeeId: number
    carId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type RequestCreateOrConnectWithoutOwnerInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutOwnerInput, RequestUncheckedCreateWithoutOwnerInput>
  }

  export type RequestCreateManyOwnerInputEnvelope = {
    data: Enumerable<RequestCreateManyOwnerInput>
  }

  export type CarCreateWithoutOwnerInput = {
    make: string
    model: string
    year: number
    color: string
    plateNo: number
    request?: RequestCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutOwnerInput = {
    id?: number
    make: string
    model: string
    year: number
    color: string
    plateNo: number
    request?: RequestUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutOwnerInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput>
  }

  export type CarCreateManyOwnerInputEnvelope = {
    data: Enumerable<CarCreateManyOwnerInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutOwnerInput, RequestUncheckedUpdateWithoutOwnerInput>
    create: XOR<RequestCreateWithoutOwnerInput, RequestUncheckedCreateWithoutOwnerInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutOwnerInput, RequestUncheckedUpdateWithoutOwnerInput>
  }

  export type RequestUpdateManyWithWhereWithoutOwnerInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutRequestInput>
  }

  export type CarUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutOwnerInput, CarUncheckedUpdateWithoutOwnerInput>
    create: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput>
  }

  export type CarUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutOwnerInput, CarUncheckedUpdateWithoutOwnerInput>
  }

  export type CarUpdateManyWithWhereWithoutOwnerInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutCarInput>
  }

  export type CarScalarWhereInput = {
    AND?: Enumerable<CarScalarWhereInput>
    OR?: Enumerable<CarScalarWhereInput>
    NOT?: Enumerable<CarScalarWhereInput>
    id?: IntFilter | number
    ownerId?: IntFilter | number
    make?: StringFilter | string
    model?: StringFilter | string
    year?: IntFilter | number
    color?: StringFilter | string
    plateNo?: IntFilter | number
  }

  export type RequestCreateWithoutEmployeeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
    owner: UserCreateNestedOneWithoutRequestInput
    car: CarCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutEmployeeInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    ownerId: number
    carId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type RequestCreateOrConnectWithoutEmployeeInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput>
  }

  export type RequestCreateManyEmployeeInputEnvelope = {
    data: Enumerable<RequestCreateManyEmployeeInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutEmployeeInput, RequestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<RequestCreateWithoutEmployeeInput, RequestUncheckedCreateWithoutEmployeeInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutEmployeeInput, RequestUncheckedUpdateWithoutEmployeeInput>
  }

  export type RequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestCreateManyCarInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    ownerId: number
    employeeId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type RequestUpdateWithoutCarInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutRequestNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestCreateManyOwnerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    employeeId: number
    carId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type CarCreateManyOwnerInput = {
    make: string
    model: string
    year: number
    color: string
    plateNo: number
  }

  export type RequestUpdateWithoutOwnerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutRequestNestedInput
    car?: CarUpdateOneRequiredWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    employeeId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarUpdateWithoutOwnerInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
    request?: RequestUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
    request?: RequestUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    plateNo?: IntFieldUpdateOperationsInput | number
  }

  export type RequestCreateManyEmployeeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    location: string
    type: string
    price: string
    ownerId: number
    carId: number
    finished?: boolean
    cancelled?: boolean
    rating?: string | null
  }

  export type RequestUpdateWithoutEmployeeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutRequestNestedInput
    car?: CarUpdateOneRequiredWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    cancelled?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}