console.log("hello World");
let num1=21;
let num2=-4;
let num3=2.1;

console.log(num1);
console.log(num2);
console.log(num3);

// let ans = num1%num2;

let ans = num1 ** 3;  // power operator is used by **

console.log(ans);


let error = 5*3*(3*2/2)**(6/2);
console.log(error);

let val = true;
console.log(val);


let n = 20;

if(n>=40)
  console.log("A+");
if(n>=30 && n<=40)
  console.log("A")
if(n>=20 && n<=30)
   console.log("B");

   // Functions expression

// function newFunction(){
//     let n1 = 10 ;
//     let n2 = 20;
//     console.log(n1+n2);
// }

   // parametrised function
function newFunction(num1,num2){
    console.log(num1 + num2);
}
newFunction(5,6);
   // 