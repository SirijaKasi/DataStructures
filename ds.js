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
  //inserting node in the middle

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

list.printList();
