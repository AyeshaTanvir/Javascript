let a=10;
let b=5;
let sum = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let mod = a%b; //reminder
let exp = a**b; //exponential
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log(exp);
//Assignment operators
let c=10;
c += 5;
console.log(c);
//Comparision operators
let num1=5
let num2='5';
console.log(num1==num2); //true
console.log(num1===num2); //false
console.log(num1!=num2); //false
console.log(num1!==num2); //true
console.log(num1>num2); //false
console.log(num1<num2); //false
console.log(num1>=num2); //true
console.log(num1<=num2); //true

//Logical operators
let x=true;
let y=false;
let result=x && y;
console.log(result); //false
result=x || y;
console.log(result); //true
result=!x;
console.log(result); //false
result=!y;
console.log(result); //true

//unary operation
let count=10;
count++;
console.log(count); //11
count--;
console.log(count); //10
let neg=-count;
console.log(neg); //-10
let pos=+count;
console.log(pos); //10

//Tenary operators
let age=18;
let isAdult= age>=18 ? 'Adult':'Minor';
console.log(isAdult); //yes

//binary operators
let num=5;
let binary=num.toString(2);
console.log(binary); //101
let num5=parseInt(binary,2);
console.log(num5); //5
