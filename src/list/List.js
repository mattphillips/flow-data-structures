// @flow
import Node from '../Node';

export interface List<T> {
  nodes: Node<T>,
  add(data: T): void,
  get(index: number): T,
  remove(index: number): void,
  size(): number
};

