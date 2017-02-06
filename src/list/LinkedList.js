// @flow
import Node from '../Node';

export default class LinkedList<T> {

  nodes: Node<T>;
  constructor() {
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

}
