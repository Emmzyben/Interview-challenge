// Import the classes from dataStructures.js
import { Stack, Queue } from './dataStructures.js';


// Test Stack
console.log("Testing Stack:");
const stack = new Stack();
console.log("Is stack empty?", stack.isEmpty()); // true
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top of stack:", stack.peek()); // 30
console.log("Popped value:", stack.pop()); // 30
console.log("Top of stack after pop:", stack.peek()); // 20
console.log("Is stack empty?", stack.isEmpty()); // false
stack.pop();
stack.pop();
console.log("Is stack empty after popping all?", stack.isEmpty()); // true
console.log("Popped value from empty stack:", stack.pop()); // "Stack is empty"

// Test Queue
console.log("\nTesting Queue:");
const queue = new Queue();
console.log("Is queue empty?", queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front of queue:", queue.peek()); // 10
console.log("Dequeued value:", queue.dequeue()); // 10
console.log("Front of queue after dequeue:", queue.peek()); // 20
console.log("Is queue empty?", queue.isEmpty()); // false
queue.dequeue();
queue.dequeue();
console.log("Is queue empty after dequeuing all?", queue.isEmpty()); // true
console.log("Dequeued value from empty queue:", queue.dequeue()); // "Queue is empty"
