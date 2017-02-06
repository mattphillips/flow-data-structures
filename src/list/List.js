// @flow
export interface List<T> {
  add(data: T): void,
  get(index: number): T,
  remove(index: number): void,
  size(): number
};

