// includes23

let str = "Rahul Jasoria";
console.log(str.includes('a'));

// substr

console.log(str.substr(6,3)); // here 3 is length

// substring

console.log(str.substring(2,9)); // here 9 is position

console.log(str.substring(-2,5)); // in substring negetive value act as 0 like -2 will 0

console.log(str.substring(-2,-5)); // here starting and ending points are 0 so empty string
console.log(str.substring(5,2));  // ye swap kar dega to ye 2, 5 ho jaega

// indexof()

console.log(str.indexOf('a',3)); // isme 3 no of indexex ignored hai matab phela a first 3 index me hai to ignore ho jaega

console.log(str.indexOf('a'),str.indexOf('a')+1);

// replace

console.log(str.replace('a','e')); // sirf forst words me se replace honge
console.log(str.replaceAll('a','e')); // replace all words


// split()

let url = 'https://google.com/coding/expert/rahuljasoria'; // divide string according to / 

console.log(url.split('/')); // return value in form of array

