//implement queue
//first-in first-out method
//very similar to link lists

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    add(item) {
        let node = new QueueNode(item);
        if (this.last != null) {
            this.last.next = node;
        }

        this.last = node;
        if (this.first === null) {
            this.first = node;
        }
    }

    remove() {
        if (this.first === null) return "Nothing to remove";

        let item = this.first.data;
        this.first = this.first.next;
        if (this.first === null) this.last = null;
        return item;
    }

    peek() {
        if (this.first === null) return "Nothing display";
        return this.first.data;
    }

    isEmpty() {
        return this.first === null;
    }
}

let q = new MyQueue();

console.log(q.isEmpty())
console.log(q.add("Roger"))
console.log(q.add("Peter"))
console.log(q.add("Zayn"))
q.remove()
q.remove()
q.remove()
console.log(q.isEmpty())
console.log(q.peek())