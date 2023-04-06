class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
 
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
 
  // добавление элемента в конец списка
  append(data) {
    const node = new Node(data);
 
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
 
    this.length++;
  }
 
  // добавление элемента в начало списка
  prepend(data) {
    const node = new Node(data);
 
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
 
    this.length++;
  }
 
  // поиск элемента по значению
  find(data) {
    let current = this.head;
 
    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
 
    return null;
  }
 
  // вставка элемента после заданного элемента
  insertAfter(after, data) {
    const node = new Node(data);
 
    if (after === null) {
      return;
    }
 
    if (after === this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      node.prev = after;
      node.next = after.next;
      after.next.prev = node;
      after.next = node;
    }
 
    this.length++;
  }
 
  // удаление элемента из списка
  remove(node) {
    if (node === null || this.length === 0) {
      return;
    }
 
    if (node === this.head) {
      this.head = node.next;
 
      if (this.head !== null) {
        this.head.prev = null;
      }
    } else if (node === this.tail) {
      this.tail = node.prev;
 
      if (this.tail !== null) {
        this.tail.next = null;
      }
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
 
    this.length--;
  }
 
  // изменение значения элемента
  changeValue(node, data) {
    if (node === null || this.length === 0) {
      return;
    }
 
    node.data = data;
  }
}