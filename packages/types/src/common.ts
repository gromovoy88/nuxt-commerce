export type Maybe<T> = T | null;

export type Tree<T> = T & {
  children?: Tree<T>[];
}
