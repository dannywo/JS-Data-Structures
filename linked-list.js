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
    insertAt(element, index) {
        let node = new Node(element),
            //store current node
            current, previous;

        //check for invalid amount
        if (index < 0 || index > this.size) {
            return console.log(`Index ${index} is not a valid entry.`);
        }

        //check for 0 and insert new head
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            //itereatoe over the list 
            //to find position & insert
            current = this.head;

            //we can start at 1 since
            //we already check for head
            let startIndex = 0;

            while (startIndex < index) {
                previous = current;
                current = current.next
                startIndex++;
            }

            //update nodes
            node.next = current;
            previous.next = node;
        }

        this.size++;
    }

    //removeFrom(location)
    removeFrom(index) {
        //check for invalid amount
        if (index < 0 || index > this.size) {
            return console.log(`Index ${index} is not a valid entry.`);
        }

        // remove head if index 0
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current, previous;
            //iterate over the list 
            //to find position & remove
            current = this.head;

            //we can start at 1 since
            //we already check for head
            let startIndex = 0;

            while (startIndex < index) {
                previous = current;
                current = current.next
                startIndex++;
            }

            //delete node
            previous.next = current.next;
        }

        this.size--;

        return current.data
    }

    //removeElement(Element)
    removeElement(data) {

        let current = this.head,
            previous,
            startIndex = 0;

        // go through entire list        
        while (startIndex <= this.size) {

            if (data.id === current.data.id && startIndex === 0) {
                this.head = current.next;
                return current.data
            }
            //find data by id
            if (data.id === current.data.id) {

                //remove element
                previous.next = current.next;
                this.size--;
                return current.data
            }

            previous = current;
            current = current.next;
            startIndex++;
        }

        //if element is not found
        return -1;
    }


    //Helper functions
    // isEmpty

    // listSize
    // printList
}

let guest1 = {
    id: 1,
    name: 'Zayn D Orellana',
    time: new Date(),
    partySize: 4
},
    guest2 = {
        id: 2,
        name: 'Nadia Taha',
        time: new Date(),
        partySize: 2
    },
    guest3 = {
        id: 3,
        name: 'Danny Orellana',
        time: new Date(),
        partySize: 2
    };

let queue = new LinkedList();
queue.add(guest1);
queue.add(guest2);
queue.insertAt(guest3, 2);
queue.removeFrom(5);

console.log(queue.head.data)
console.log(queue.head.next.data)
console.log(queue.head.next.next.data)

queue.removeElement(guest2);

console.log(queue.head.data)
console.log(queue.head.next.data)