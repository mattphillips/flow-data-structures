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

