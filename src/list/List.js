// @flow
import Node from '../Node';

export interface List<T> {
  nodes: Node<T>,
  add(data: T): void,
  get(index: number): T,
  remove(index: number): void,
  size(): number,
  toArray(): Array<T>,
  filter(predicate: T => boolean): List<T>,
  map<S>(fn: T => S): List<S>,
  reduce(fn: (T, T) => T): T
};
