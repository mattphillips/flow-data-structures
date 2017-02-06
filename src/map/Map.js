// @flow
export interface Map <K, V> {
  put(key: K, value: V): boolean,
  contains(key: K): boolean,
  isEmpty(): boolean,
  size(): number,
  remove(key: K): boolean,
  clear(): void
}
