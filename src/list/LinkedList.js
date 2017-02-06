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
}
