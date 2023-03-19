// Arrow Function

let val = () => {
    console.log('HI');
}
val();

// let ans = (a,b) => {
//     return a+b;
// }
// console.log(ans(2,3));

// 1) In case of arrow functions if only single executable statement is there then we can ignore writing the return keyword

let ans = (a,b) => a+b;
console.log(ans(2,4));

// 2) if only 1 argument is present then we can ignote writing the parenthesis

let ans2 = a => Math.sqrt(a);
console.log(ans2(81));

// javascript is syncronous and single threaded

// single threaded - ek time pe ek hi kaam hoga or javascript me onlu 1 call stack hai

// scyncronous - matlab line by line code chalega essa nii hoga pehle 1 line the 10th line essa nii hoga

// java script ke pass code ke beech ne delay dalne ke liye kuch bhi nii hai isliye vo browser ki maded leta hai brouser ke pass web apis hoti hai (jese console, setinterval,settimeout,alert) , ye web apis aati hai window. -- se like window.console.log() ,  window chahe likho ya nhii koi chakar nii , javscript ka code tab tak chalta hai jab tak call stack empty na ho jae

// setTimeOut(callbackfunction,time of delay) - user to delay the code execution

// time is alwas in ms 1s = 1000ms

console.log('start');
setTimeout(function(){
    console.log('middle');
},1000)
console.log('end')


setTimeout(()=>{
    console.log('Delay for 6 second');
},6000)


setTimeout(()=>{
    console.log('Delay for 4 second');
},4000)


setTimeout(()=>{
    console.log('Delay for 2 second');
},2000)
