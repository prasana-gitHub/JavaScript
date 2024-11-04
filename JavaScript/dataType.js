let name = "Amit Pattanayak"  //String DataType
//console.log(name);

let age = 22                         //Number DataType
let logInUser_Id = true             // Boolean DataType


/*String => ""
Boolean => true/false
null => standalone value
undefined =>
Symbol => unique*/


// Object

console.log(typeof age);

console.table([typeof name, typeof age,typeof logInUser_Id])



let str1 = "AMit";
let str2 = String(str1)
console.log(typeof str2);

let id = 29515
let idType = Number(id)
console.log(typeof (idType));


let x = 26449
let scib = Symbol(x)
console.log(typeof (scib));


let njc 
console.log(typeof (njc));



//************* String new Method*************

const brahamn = "Srikant kumar panda "
const karan = "Prasana Pattanayak "
console.log(`${brahamn}belongs to brahamn family`);
console.log(`${karan}belongs to karan family`);

console.log(brahamn.charAt(6));
console.log(karan.indexOf('t'));

