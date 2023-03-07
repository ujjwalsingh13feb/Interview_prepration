// A linked list is a linear data structure, in which the
//  elements are not stored at contiguous memory locations. 
// The elements in a linked list are linked using pointers

// https://drive.google.com/file/d/1WkwJeeH7Wdfau-SVcmT9YcQ1rVijwv9b/view?usp=sharing


// # javascript program to illustrate arrays in javascript
// arr = [1,3,5,3]#initializing an array of size 4

let arr = [1,3,5,3]
console.log(arr[3], arr[2]) 
 
// console.log(arr[3], arr[2]) #gives the element at index 3 and index 2



// in linklist example


// Linked list implementation in javascript
 
 
// Creating a node
class Node {
     
    constructor(){
        this.value = 0;
        this.next = null;
    }
     
}
 
 
let head = null;
let one = null;
let two = null;
let three = null;
 
// allocate 3 nodes in the heap
one = new Node();
two = new Node();
three = new Node();
 
// Assign value values
one.value = 1;
two.value = 2;
three.value = 3;
 
// Connect nodes
one.next = two;
two.next = three;
three.next = null;
 
// print the linked list value
head = one;
while (head != null) {
    
    console.log(head.value);
    head = head.next;

}
 

 
