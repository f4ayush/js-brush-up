class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(element) {
        let node = new Node(element)
        let current
        if (this.head === null) {
            this.head = node
        }
        else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }


    insertAt(pos, element) {
        let node = new Node(element)
        let current = this.head, previous
        if (pos === 0) {
            node.next = this.head
            this.head = node
        } else {
            let it = 0
            while (it < pos) {
                it++
                previous = current
                current = current.next
            }
            previous.next = node
            node.next = current
        }
        this.size++
    }

    removeFrom(element) {
        let current = this.head
        let previous
        while (current.next) {
            if (current.data == element) {
                previous.next = current.next
                this.size--
                return node
            }
            previous = current
            current = current.next
        }
        return -1
    }

}


let ll = new LinkedList()

ll.add("ayush")