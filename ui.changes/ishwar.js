console.log("Hi");

// array is an order list of values
// empty array
// let a = [];
// console.log(a)

// let b = [10, 'Ram', 32];

// console.log(b);
// console.log(b[1]);

// let value = b[2];
// console.log("This is good Number: ",value);

// b[1] = 'Mohan';

// console.log(b[b.length-2]);

// b.push("Testcase");

// console.log(b);

// for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
// }

// let g = b.length // Length of the array
// let m = b.toString() // converts the given value in to string

// function in javascript

// function Ishwar(n='Hi'){
//     console.log('Hellow Ishwar',n)
// };

// Ishwar('Ishwar');

// const addition = function (a,b){
//     return a+b;
// }

// const addition = (a,b) => a+b;

// let m = addition(6,7);

// console.log(m);

// # call back function -function passed as a parameter inside a function

// function greet(l, ishwar){
//     return(ishwar(l));
// }

// function shyam(k){
//     return k;
// }

// console.log(greet(5, shyam));

// # constructor function - special type of function used to create multiple type of object through new keyword

// function BioData(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const user = new BioData("Divya", 27);
// console.log(user.name);

// # async function

// async function Ishwar() {
//     return "fetched data";
// }
// Ishwar().then(console.log);


// # Recursive Function

// function factor12(n){
//     if (n==0){
//         return 1;
//     }
//     return n*factor12(n-1);
// }

// console.log(factor12(4));

// # Nested Function

function outerfun(a){
    function innnerfun(b){
        return b;
    }
    return innnerfun;
}
const add = outerfun(1);
console.log (add(10));