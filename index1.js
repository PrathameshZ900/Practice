// morden javascript

// template litrals 

function intro(name,age){
    console.log(`I am ${name}.I am ${age} old.`);
} 
// intro("ram",25);

// console.log(`Delta compression using up to 4 threads
// Compressing objects: 100% (3/3), done.
// Writing objects: 100% (3/3), 637 bytes | 637.00 KiB/s, done.
// Total 3 (delta 0), re


// used 0 (delta 0), pack-reused 0 (from 0)
// To https://github.com/PrathameshZ900/Practice.git
//    d0e814e..b7d8c25  main -> main
// PS C:\Users\prath\Desktop\Practice> `)


// console.log(`The sum of ${8} and ${9} is ${8+9}.`)

// arrow function 


function addsimple(a,b){
    console.log(a+b);
}

let addArrow = (a,b)=>{console.log(a+b)};
// addArrow(2,5) 

let arr = [1,2,3,4,5,6,7];

let ans = arr.filter((val)=> val % 2 == 0 );
// console.log(ans);


function Person(name) {
    this.name = name;

    this.arrowFunc = () => {
        console.log("Arrow Function:", this.name);
    };

    this.regularFunc = function () {
        console.log("Regular Function:", this.name);
    };
}

// const person1 = new Person("John");
// person1.arrowFunc();  // ✅ Output: Arrow Function: John
// person1.regularFunc(); // ✅ Output: Regular Function: John


function createPerson(name, age) {
    return { name, age }; // Using object shorthand syntax
}

// const person1 = createPerson("John", 30);
// console.log(person1); // Output: { name: 'John', age: 30 }



function createPerson(name, age) {
    return {
        name,
        age,
        introduce() { // Using method shorthand syntax
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
        }
    };
}

// const person2 = createPerson("John", 30);
// person2.introduce(); // Output: Hi, I'm John and I'm 30 years old.





// Rest in function parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread arr1 and add more elements

// console.log(arr2); // Output: [1, 2, 3, 4, 5]

function swap(a, b) {
    // Swap using array destructuring
    [a, b] = [b, a];

    console.log("a:", a);
    console.log("b:", b);
}

// Example usage:
let x = 5;
let y = 10;

// swap(x, y); 




