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
  }
}
let list = new LinkedList();
list.insertFirst(10);
list.insertFirst(20);
console.log(list);
