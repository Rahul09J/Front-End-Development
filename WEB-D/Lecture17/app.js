// hoisting : it is defined as eccessing any variable or function before its declaration is known as hoistiung

// in case of let and const hoisting is done little differnt as of var , that hoisting is done in dead temporal zone(DTC)



console.log(x); // isme x declare karne se phele hi access kr rhe hai
f();
var x =100;

function f(){
    console.log('Hello');
}

// example 2 

// lexical Enviorment/Scope : it is local memory as well as lexical enviorment of its parent.
// agar hame local memory ya parent memory ya unke bhi parent me dhoondna ho to use lexical memory kehte hai



// console.log(a);
// function b(){
//     c();
//     var x = 999;
//     function c(){
//         console.log(x);
//     }
// }
// b();
// var a =100;



// hoisting in let and const

// console.log(x);  // undefined 
// console.log(y);  // error cannot acces y before instialisatin
// var x =10;
// let y =20;


