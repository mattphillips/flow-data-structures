// @flow

import { List } from './List';
import Node from '../Node';

type U<T> = Array<T> | T;

export default class LinkedList<T> implements List<T> {

  nodes: Node<T>;

  constructor(data: ?U<T>) {

    if (Array.isArray(data))
      data.forEach(t => this.add(t));

    else if (data !== undefined)
      this.nodes = new Node(data, null);

    else
      this.nodes = null;
  }

  add(item: T): void {

    const next: Node<T> = new Node(item, null);

    if (this.nodes == null) {
      this.nodes = next;

    } else {
      let current: Node<T> = this.nodes;
      while (current.getNext() != null)
        current = current.getNext();

      current.setNext(next);
    }
  }

  get(index: number): T {

    if (this.nodes == null || index < 0)
      throw new Error(`Index out of bounds: ${index}`);

    let current: Node<T> = this.nodes;
    for (let i = 0; i < index; i++) {

      if (current.getNext() != null)
        current = current.getNext();

      else
        throw new Error(`Index out of bounds: ${index}`);
    }

    return current.getData();
  }

  remove(index: number): void {

    if (this.nodes == null || index < 0)
    throw new Error(`Index out of bounds: ${index}`);

    let parent: Node<T> = null;
    let current: Node<T> = this.nodes;

    for (let i = 0; i < index; i++) {

      if (current.getNext() != null) {
        parent = current;
        current = current.getNext();

      } else {
        throw new Error(`Index out of bounds: ${index}`);
      }
    }

    if (parent == null) {
      this.nodes = null;

    } else {

      if (current.getNext() != null) {
        parent.setNext(current.getNext());

      } else {
        parent.setNext(null);
      }
    }
  }

  size(): number {

    let size: number = 0;

    if (this.nodes == null) {
      return size;

    } else {
      let current: Node<T> = this.nodes;
      size++;

      while (current.getNext() != null) {
        size++;
        current = current.getNext();
      }
    }

    return size;
  }

  toArray(): Array<T> {
    return Array.from({ length: this.size() }).map((_, i) => this.get(i));
  }

  filter(predicate: T => boolean): LinkedList<T> {
    return new LinkedList(this.toArray().filter(predicate));
  }

  map<S>(fn: T => S): LinkedList<S> {
    return new LinkedList(this.toArray().map(fn));
  }

  reduce(fn: (T, T) => T): T {
    return this.toArray().reduce(fn);
  }

  reduceInitial<S>(fn: (S, T) => S, initial: S): S {
    return this.toArray().reduce(fn, initial);
  }
}
