//Defining Node
class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0; //default
  }
  //inserting first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //inserting last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //codition if head is empty or null => head=node
    if (!this.head) {
      this.head = node;
    }
    //else find lastnode and assign lastnode.next to the head
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //inserting node at the middle
  insertAt(data, index) {
    //index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, previous;
    //set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      // node before index
      previous = current;
      count++;
      current = current.next; //node after index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //getAt() to know the particular value by it's index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //removeAt
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    //Remove at First
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  //print the List
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(50);
list.insertLast(90);
list.insertAt(80, 2);
list.insertAt(100, 1);
list.insertAt(990, 3);

// list.getAt(4);

// list.printList();
list.removeAt(0);
