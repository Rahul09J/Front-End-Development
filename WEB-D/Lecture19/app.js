//constructor function


// function user(){

// }
// const ans = new user();
// console.log(ans);

// jo hum new keyword se call karte hai to vo constructor function ban jata hai aur constructor function objects ko create karne ka kaam karta hai


// function user(){
//     this.username = 'Rahul Jasoria';
//     this.email = 'rahul1100@gmail.com';
// }
// const ans = new user();
// console.log(ans);
// console.log(ans.username);
// console.log(ans.email);



function user(user,roll){
    this.username = user;
    this.email = roll;

    this.getName = function(){
        return `My Name is ${this.username}`;
    }
}
const ans = new user('Rahul Jasoria','1059');
console.log(ans);
console.log(ans.getName());
const ans2 = new user('Rima Debnath','1066');
console.log(ans2);
console.log(ans2.getName());
const ans3 = new user('Shivaye Garg','1084');
console.log(ans3);
console.log(ans3.getName());

// constructor function acts as a blueprint that is it returns an object whenever the function calling is done along with a special keyward new . It is used to create multiple objects just by calling the function and not hardcoding is. 


 
// class syntax : it is a syntactical sugar for constructor function 

class user2{
    constructor (name,mail){
        this.username = name;
        this.email = mail;
    }
        getname(){
            return `my name is ${this.username}`;
    }
}
// let sol = new user('rahul','rahul@gmail.com');
// console.log(sol.username);
// console.log(sol.email);
// console.log(sol.getName());

class Student extends user2{
    constructor(username,mail,roll){
        super(username,mail);
        this.roll = roll;
    }
}


let sol = new Student('rahul','rahul@gmail.com','1059');
console.log(sol.username);
console.log(sol.email);
console.log(sol.roll);
console.log(sol.getName());
