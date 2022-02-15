//implementing a stack
//first-in last-out
class StackNode {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    //push
    push(data) {
        let node = new StackNode(data);
        node.next = this.top;
        this.top = node;
        this.length++;
        return "Item has been added";
    }

    //pop
    pop() {
        if (this.top === null) return "Stack is empty.";

        this.top = this.top.next;
        this.length--;
        return "Item has been removed."

    }

    //peek - return top node
    peek() {
        if (this.top === null) return "Stack is empty";
        return this.top;
    }
    //isEmpty
    isEmpty() {
        return this.length === 0;
    }
}

let stack = new MyStack();

console.log(stack.push("Danny"))
console.log(stack.push("Nads"))
console.log(stack.push("Z"))
console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.peek())