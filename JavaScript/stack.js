// Stack(Primitive Data Type)  Heap(Non-Primitive)
let nickName = "Amit Pattanayak";

let realName = nickName;
let lastName = "Pattanayak";
console.log(realName);
console.log(lastName);

let user = {
    email:"amit.pattanayak45@gmail.com",
    password:"Prasana@8455",
    upi_id:"8455016201@ybl"
}

let userOne = user
console.table(userOne);
userOne.email = "prasanapattanayak28@gmail.com"
console.log(userOne.email);
console.log(user.email);


