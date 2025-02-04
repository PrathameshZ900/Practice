let arr = ["","str",1,0,false,true,[],{},2,3,4," ","jo"];

function isTruthy(arr){

    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}

// isTruthy(arr);


function countFalsyValue(arr){

    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == false){
            count += 1;
        }
    }

    console.log(count);
}
// countFalsyValue(arr)


let filValue = arr.filter((val)=> val == false);
let mpVal = arr.map((val)=> val == true);

// console.log(mpVal)



// comparesion opraretors


let a = 10;
let b = 20;

function compare(a,b){
    if(a > b){
        console.log(`${a} is grater then ${b}.`);
    }else if(b > a){
        console.log(`${b} is greater then ${a}.`);
    }else{
        console.log("Both are equal.");
    }
}


// compare(a,b)


function MathOpr(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}


