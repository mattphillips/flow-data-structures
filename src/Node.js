export default class Node<T> {

  data: T;
  next: Node<T>;

  constructor(data: T, next: Node<T>) {
    this.data = data;
    this.next = next;
  }

  setNext(next: Node<T>): void {
    this.next = next;
  }

  getData(): T {
    return this.data;
  }

  getNext(): Node<T> {
    return this.next;
  }
}
