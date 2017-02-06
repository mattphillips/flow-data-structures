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

test('should return value at given index', t => {
  const list: List<string> = new LinkedList();

  list.add('A');
  list.add('B');
  list.add('C');

  t.is(list.get(0), 'A');
});
