//function declaration
function greet() {
    return 'Good Morning';
}   
console.log(greet());
//function expression
function greet1(name) {
    console.log('Good Morning '+name);
}
greet1('John');
//ADD CODE HERE
function add(a,b) {
    return a+b;
}
console.log(add(2,3));
//anonymous function
let greet2 = function() {
    return 'Good Morning';
}
console.log(greet2());
//arrow function
let greet3 = () => {
    return 'Good Morning';
}
console.log(greet3());
//arrow function with parameters
const sqaure = x => x*x;
const result = sqaure(5);
console.log(result);