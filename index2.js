// higher order function

let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  
  let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
  ];
  let result = {};

// // Iterate through each student and map their subject
// students.forEach(student =>{
   
//     let sub = subjectsHash[student.subjectID];

//     if(result[student.name]){
//         result[student.name].push(sub);
//     }else{
//         result[student.name] = [sub];

//     }
  

// })

// // console.log(result)


students.forEach(student =>{
  let sub = subjectsHash[student.subjectID]
  if(result[student.name]){
    result[student.name].push(sub);
  }else{
    result[student.name] = [sub];
  }
})
// console.log(result)



let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];


let result2 = []



// [
//   {
//     name: "Prateek",
//     marks: [
//       { subject: "Javascript", score: 90 },
//       { subject: "HTML", score: 81 },
//       { subject: "CSS", score: 80 },
//     ],
//   },
//   {
//     name: "Nrupul",
//     marks: [
//       { subject: "Java", score: 95 },
//       { subject: "Python", score: 85 },
//     ],
//   },
// ];



let formattedData = allStudentsMarksData.map((student) => {
  let marks = [];
  for (let i = 1; i <= 5; i++) {
    if (student[`subject${i}`] && student[`marks${i}`] !== null) {
      marks.push({ subject: student[`subject${i}`], score: student[`marks${i}`] });
    }
  }
  return { name: student.name, marks };
});

// console.log(formattedData);





const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const result3 = voters.reduce(
  (acc, voter) => {
    if (voter.age >= 18 && voter.age <= 25) {
      acc.numYoungPeople++;
      if (voter.voted) acc.numYoungVotes++;
    } else if (voter.age >= 26 && voter.age <= 45) {
      acc.numMidsPeople++;
      if (voter.voted) acc.numMidVotesPeople++;
    } else if (voter.age > 45) {
      acc.numOldsPeople++;
      if (voter.voted) acc.numOldVotesPeople++;
    }
    return acc;
  },
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

// console.log(result3);


const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];


// let ansobj = {};

// for(let i = 0; i < strings.length; i++){
//   if(ansobj[strings[i]]){
//     ansobj[strings[i]] += 1;
//   }else{
//     ansobj[strings[i]] = 1;
//   }
// }


let ansobj = strings.reduce((acc,ele)=>{
   
  acc[ele] = (acc[ele] || 0) + 1;
  return acc


},{}); 

// console.log(ansobj)


const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

let anssum = numbers.reduce((acc,ele)=>{
  if(ele % 3 == 0 || ele % 5 == 0){
    acc += ele;
  }
  return acc;

},0)

// console.log(anssum)


const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];

function palindrome(str){
  return str === str.split("").reverse().join("");
}

let anss = words.filter(ele => palindrome(ele));
console.log(anss);


