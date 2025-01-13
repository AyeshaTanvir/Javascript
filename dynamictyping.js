let a=42;
console.log(typeof(a));
a="hello";
console.log(typeof(a));
//type coercion
let b=42;
let c="3";
let r=b+c;
console.log(r);
console.log(typeof(r));
//weaker type
let d=42;
if (typeof d === 'number') {
    console.log('d is a number');
}
else{
    console.log('d is not a number');
}