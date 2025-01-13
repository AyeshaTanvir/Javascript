//arrays
// array lieral
let fruits = ['apple','mango','banana','orange'];
//array constructor
let fruits1 = new Array('pineapple','pomegranate','strawberry','berry');
console.log(fruits[1]);
console.log(fruits.length);
fruits1.push('grapes'); //value in the last
console.log(fruits1);
fruits1.pop(); //remove value from the last
console.log(fruits1);
fruits1.unshift('kiwi'); //value in the first
console.log(fruits1);
fruits1.shift(); //remove value from the first
console.log(fruits1);
/*-concat(): merge two or more arrays
-join(): join all elements of an array into a string
-slice(): extract a section of an array and return a new array
-splice(): add or remove elements from an array at a specific index
-reverse(): reverse the order of elements in an array
-sort(): sort the elements of an array
-indexOf(): search the array for an element and return its position
-lastIndexOf(): search the array for an element, starting at the end, and return its position
-find(): return the first element that matches the condition
-map(): create a new array with the results of calling a function for every array element
-filter(): create a new array with all elements that pass a test
-reduce(): reduce the array to a single value
-foreach(): call a function for each array element
-some(): check if some array elements pass a test
-every(): check if all array elements pass a test
includes(): check if an array contains a specific element
fill(): fill the elements in an array with a static value
copyWithin(): copy array elements within the array
from(): create an array from an object
of(): create an array from the arguments passed
keys(): return the keys of an array
values(): return the values of an array
*/

//iterating an array using for loop
for (let i = 0;i<fruits.length;i++) {
    console.log(fruits[i]);
}
//iterating an array using foreach loop
for (let fruit of fruits) {
    console.log(fruit);
};