//create 2 classes

//node class - containing data and next
class Node {
    //constructor
    constructor(data) {
        this.data = data;
        //store following node
        this.next = null;
    }
}

//LinkedList Class
class LinkedList {
    constructor() {
        //store 1st node
        this.head = null;
        this.size = 0;
    }

    //add
    add(element) {
        let node = new Node(element),
            //store current node
            current;


        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            //iterate through end of list
            while (current.next) {
                current = current.next;
            }

            //add node
            current.next = node;
        }

        this.size++;
    }

    //insertAt(data, location)
    //removeFrom(location)
    //removeElement(Element)


    //Helper functions
    // isEmpty
    // listSize
    // printList
}

let item = new Node({ name: 'diego' })

console.log(item.data.name)