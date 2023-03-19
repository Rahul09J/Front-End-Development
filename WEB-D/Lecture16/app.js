
// ARRAY

// destructive methods

let arr = [1,2,3,'rahu',null,[1,2,[3,4]],8];
console.log(arr[5]);
console.log(arr[5][2][0]);


// array methods

//push
console.log(arr);

console.log(arr.push("Jasoria",1,2,undefined)); // gives the new length of array

//pop
console.log(arr.pop());

// unshift : 

console.log(arr.unshift("sam",4,5,6));  // return the length

// shift

console.log(arr.shift());  // return last pop element

// // non destructive methods

// //slice()

let arr1 = [1,2,3,'rahul','jasoria',null,undefined,[1,2,[3,4]],8,9];
console.log(arr1.slice(2)); // here 2 is starting index
console.log(arr1.slice(2,4)); // here 2 is starting index and 4 is last index and last index is not included


console.log(arr1.slice(2,-4)); // it prints nothing in negative case of slice

console.log(arr1.slice(-2,-4)); // it prints nothing in negative case of slice

console.log(arr1.slice(-4,-1)); // it gives value beacuse ending index is at right because array always prints from left to right

// //splice()


// // used to remove elements from the array
// // it is a destructive method
console.log(arr1.splice(2));  // 2 index se aage ka saara array nikal lega
console.log(arr1);   // isme bas phele 2 index hi reh gye 

console.log(arr1.splice(2,4)); // here 4 is the length 2 se agle 4 elemnts extract ho jaege
console.log(arr1)

console.log(arr1.splice(2,4,'rahul1','jas',12,65)); // is me 2 se lekar 4 elment rempove honge aur uski jagah ye lag jaege
console.log(arr1);


// join()
let arr2 = [1,2,3,'rahu',null,[1,2,[3,4]],8];
console.log(arr2.join('->'));

// //reverse()

console.log(arr2.reverse());
console.log(arr2); // original array is changed so it is destructive