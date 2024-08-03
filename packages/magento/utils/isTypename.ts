type TypeObject = {
  __typename: string;
  [index: string]: unknown;
};

type FilterTypeByTypename<
  A extends TypeObject,
  Typename extends string
> = A extends unknown ? (A['__typename'] extends Typename ? A : never) : never;

export function isTypename<
  T extends TypeObject,
  Typenames extends T['__typename'][]
>(
  type: FilterTypeByTypename<T, T['__typename']>,
  typename: Typenames
): type is FilterTypeByTypename<T, Typenames[number]> {
  return typename.includes(type.__typename);
}
