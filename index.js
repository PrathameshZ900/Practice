function convertToNumber(a){
    console.log(+a);
}
let b = 0
// console.log(typeof b)

function convertToStr(a) {  // Fixed function name
    console.log(String(a)); // Converts `a` to a string and logs it
}

// convertToStr(10);


class Identify {
    constructor(one, two) {
        this.one = one;
        this.two = two;
    }

    isArray() { 
        if (Array.isArray(this.one)) { 
            console.log(true)
        } else {
            console.log(false);
        }
    }
}
// const obj1 = new Identify([1, 2, 3], "hello");
// obj1.isArray(); // Output: true



// for loop 

for(let i = 0; i < 5; i++){
    console.log(i);

}

// while loop 

let i = 0;

while(i < 5){
    console.log(i);
    i++;
}


let j = 0;

do{
   j++;
   console.log(i);
}while(i < 5);