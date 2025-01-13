//scope
//global scope
const myname = "ayesha"; //global variable access to all functions
function globalScope() {
    const localvar = "local variable"; //local variable only access to this function
    console.log(myname);
    console.log(localvar);
}
//console.log(localvar);
globalScope();
if (true) {
    let blockvar = "block variable"; //block scope variable {} only access to block
    console.log(blockvar);
}
//console.log(blockvar);
function hoist() {
    console.log(a);
    var a = "hoisting";
    console.log(a);
}
hoist();
if (true) {
    console.log(x);
    let x = "block scope"; //error
    console.log(x);
}