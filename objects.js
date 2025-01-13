//object literal
let person = {
    name: 'John',
    age: 25,
}
//object constructor
let person1 = new Object();
person1.name = 'John';
person1.age = 25;
console.log(person.age);
console.log(person1['name']);
person.age = 30;
console.log(person.age);
//add property
person.email = 'john@gmail.com';
console.log(person.email);
//delete property
delete person.email;
console.log(person.email);
//nested object
let person2 = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    }
}
console.log(person2.address.city);
//object methods
let person3 = {
    name: 'John',
    age: 25,
    greet: function () {
return this.name+" "+this.age;
    }
}
console.log(person3.greet());
