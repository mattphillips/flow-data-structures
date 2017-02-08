/* @flow */
import test from 'ava';

import { List } from './List';
import LinkedList from './LinkedList';

test('should add first node to the head of the list', t => {
  const list: List<string> = new LinkedList();

  list.add('Hello');

  t.is(list.nodes.data, 'Hello');
  t.is(list.nodes.next, null);
});

test('should add new nodes to the last node', t => {
  const list: List<string> = new LinkedList();

  list.add('Hello');
  list.add('World');
  list.add('!');

  t.is(list.nodes.data, 'Hello');
  t.is(list.nodes.next.data, 'World');
  t.is(list.nodes.next.next.data, '!');
});

test('Should throw index out of bounds error when trying to access an index on an empty list', t => {
  const list: List<string> = new LinkedList();

  const error = t.throws(() => {
    list.get(0);
  }, Error);

  t.is(error.message, 'Index out of bounds: 0');
});

test('Should throw index out of bounds exception when trying to access an index less than zero', t => {
  const list: List<string> = new LinkedList();

  list.add('Hello');

  const error = t.throws(() => {
    list.get(-1);
  }, Error);

  t.is(error.message, 'Index out of bounds: -1');
});

test('Should throw index out of bounds exception when index is larger than list size', t => {
  const list: List<string> = new LinkedList();

  list.add('Zero');

  const error = t.throws(() => {
    list.get(1);
  }, Error);

  t.is(error.message, 'Index out of bounds: 1');
});

['A', 'B', 'C'].forEach((expected, index) => {
  test('should return value at given index: ' + index, t => {
    const list: List<string> = new LinkedList();

    list.add('A');
    list.add('B');
    list.add('C');

    t.is(list.get(index), expected);
  });
});

test('Should return size 0 for an empty list', t => {
  const list: List<string> = new LinkedList();

  t.is(list.size(), 0);
});

test('Should return size 1 when only one node has been added to the list', t => {
  const list: List<string> = new LinkedList();

  list.add('A');

  t.is(list.size(), 1);
});

test('Should return size of list when greater than 1', t => {
  const list: List<string> = new LinkedList();

  list.add('A');
  list.add("B");
  list.add("C");
  list.add("D");
  list.add("E");

  t.is(list.size(), 5);
});

test('Should throw index out of bounds exception when trying to remove an index from an empty list', t => {
  const list: List<string> = new LinkedList();

  const error = t.throws(() => {
    list.remove(0);
  }, Error);

  t.is(error.message, 'Index out of bounds: 0');
});

test('Should throw index out of bounds exception when trying to remove a negative index', t => {
  const list: List<string> = new LinkedList();

  list.add('Zero');

  const error = t.throws(() => {
    list.remove(-1);
  }, Error);

  t.is(error.message, 'Index out of bounds: -1');
});

test('Should throw index out of bounds when index is greater than the size of the list', t => {
  const list: List<string> = new LinkedList();

  list.add('Zero');

  const error = t.throws(() => {
    list.remove(5);
  }, Error);

  t.is(error.message, 'Index out of bounds: 5');
});

test('Should set list nodes to null when removing only entry of the list', t => {
  const list: List<string> = new LinkedList();

  list.add('A');
  list.remove(0);

  t.is(list.size(), 0);
  t.is(list.nodes, null);
});

test('Should set parent node next to null when removing last element from a list of size 2', t => {
  const list: List<string> = new LinkedList();

  list.add('A');
  list.add('B');
  list.remove(1);

  t.is(list.size(), 1);
  t.is(list.nodes.getNext(), null);
});

test('Should set parent node to removed nodes next entry from a list of size greater than 2 when removing a middle entry', t => {
  const list: List<string> = new LinkedList();

  list.add('A');
  list.add('B');
  list.add('C');
  list.remove(1);

  t.is(list.size(), 2);
  t.is(list.nodes.getNext().getData(), 'C');
});

test('Should create an empty list when no data is supplied', t => {
  const list: List<string> = new LinkedList();
  t.is(list.size(), 0);
  t.is(list.nodes, null);
});

test('Should created list with given data of one value', t => {
  const list: List<string> = new LinkedList('hello');
  t.is(list.size(), 1);
  t.is(list.get(0), 'hello');
});

test('Should create list with given array of data', t => {
  const list: List<number> = new LinkedList([1, 2, 3]);
  t.is(list.size(), 3);
  t.is(list.get(0), 1);
  t.is(list.get(1), 2);
  t.is(list.get(2), 3);
});
