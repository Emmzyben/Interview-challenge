/**
 * Stack Class
 * A stack is a data structure that follows the Last In, First Out (LIFO) principle.
 * Elements are added to and removed from the top of the stack.
 */
export class Stack {
    constructor() {
        // Array to store stack elements
        this.items = [];
    }

    /**
     * Push Method
     * Adds an element to the top of the stack.
     * @param {any} value - The value to be added to the stack.
     */
    push(value) {
        this.items.push(value);
    }

    /**
     * Pop Method
     * Removes and returns the top element of the stack.
     * @returns {any|string} - The removed element, or a message if the stack is empty.
     */
    pop() {
        return this.isEmpty() ? "Stack is empty" : this.items.pop();
    }

    /**
     * isEmpty Method
     * Checks if the stack is empty.
     * @returns {boolean} - True if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Peek Method
     * Returns the top element of the stack without removing it.
     * @returns {any|string} - The top element, or a message if the stack is empty.
     */
    peek() {
        return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }
}

/**
 * Queue Class
 * A queue is a data structure that follows the First In, First Out (FIFO) principle.
 * Elements are added to the end and removed from the front of the queue.
 */
export class Queue {
    constructor() {
        // Array to store queue elements
        this.items = [];
    }

    /**
     * Enqueue Method
     * Adds an element to the end of the queue.
     * @param {any} value - The value to be added to the queue.
     */
    enqueue(value) {
        this.items.push(value);
    }

    /**
     * Dequeue Method
     * Removes and returns the front element of the queue.
     * @returns {any|string} - The removed element, or a message if the queue is empty.
     */
    dequeue() {
        return this.isEmpty() ? "Queue is empty" : this.items.shift();
    }

    /**
     * isEmpty Method
     * Checks if the queue is empty.
     * @returns {boolean} - True if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Peek Method
     * Returns the front element of the queue without removing it.
     * @returns {any|string} - The front element, or a message if the queue is empty.
     */
    peek() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }
}
