// Higher order function are the fuction which accepts another functions as an argument
function a(fn){
    console.log('inside a');
    fn();
}
function b(){
    console.log('inside b');
}

// function (){        // when you directly use function without giving it any name then it is called anonnyoms function
//     console.log('inside b');
// }
// (b);


//Or when we return an entire function from function itself then also it is known as higher order function

// functional Expression : when we asiign an entire function to some variable thenit si known as functional expression 

function a(){
    console.log('inside a');
    function b(){
        console.log('inside b');
    }
    return b;
}
let ans = a();
console.log(ans);
ans();

// callback function : when a function is passed as an argument to some function calling and inside that function calling the passed argument is called back




// Array Methods 

// foreach :

// 1)for each accepts call back function

let arr = [1,2,3,4,5];
arr.forEach(function(i) {
    console.log(i);
});


// map 
// also accept call back function but it return a new array

let arr2 = [10,12,14,16,18];
let naya = arr2.map(function(i){
    return i+20;
})
console.log(arr2);
console.log(naya);


// filter : it also return new array only if it return trutefull value, falsly value are not stored

let arr3 = [1,2,3,4,5,6,7,8];
let naya2 = arr3.filter(function(i){
    if(i%2==0){return true;}
    return false;
})
console.log(arr3);
console.log(naya2);


// clousure = a function bundeled together with reference tl its lexicle enviorment is known as closure.
function fun(){
    let abd = 'asdfg';
    let name = 'Rahul Jasoria';
    function printName(){
        console.log(name);
    }
    return printName;  // isse ye pura print function print kar dega aurr uske saath saath rahul jasoria bhi print ho jaega kyuki jo name variable hai vo printname pe depend kar rha hai aur isme abd vale print nhi hoga kyuki ye printNmae pe depent nhi karta. 
}

let ans1 = fun();
console.log(ans1);
ans1();

// uses of closure

// function func1(){
//     return {
//         count:0,
//         getcount: function(){
//             return this.count;
//         }
//     }
// }

// let ans2 = func1();
// console.log(ans2.getcount());  // 0
// ans2.count=100;
// console.log(ans2.getcount());  // 100 ye to galat hoga kii ans se koi bhi isse change kar sakega

// isliye clouser ka use kaege


function func1(){
    count=0;
    return {
        getcount: function(){
            return count;
        }
    }
}

let ans2 = func1();
console.log(ans2.getcount());  // 0
ans2.count=100;                // 0
console.log(ans2.getcount()); // ab isme closure ke karan count ki value change nhi hogi

// use of clouser : jab class class syntax introduce nhi hua usse pehle method or clases ko private nhi kar sakte the, isliye hum  clouser use karte hai method or classes ko private banane ke liye



//----------//------------//---------//----------//----------//------------//---------//-----------//


let todo = {
    title : 'go to gym',
    func : function(){
        return `you have to ${this.title}`;
    }
}
console.log(todo.title)  // go to gym
console.log(todo.func());
// console.log(todo.rahul());   // error aayega kyu method defined nhi hai
console.log(todo.toString());  // object object output aayega  isliye yaha use hoga concept of prototype

// Prototype : It is also an object whenever a object is created , object.prototype is also created with it, this prototype is known as fallback method/way of accesing the properities 

console.log(todo.__proto__); // tender proto : ye use hota hai object ke parent me jane ke liye

console.log(todo.__proto__ === Object.prototype);   // true 


// Object.prototype.__proto__ === null // true end hai ye


// java script me haar cheej object hai 
// array bhi java script mwe object hi ban jata hai 

// arr -->objectg -->Arr.prototype --> object.prototype --> null

// string -->object -->String.prototype --> Object.prototype --> null