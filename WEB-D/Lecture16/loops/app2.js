let i;
let j;

for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        if(i===j){
            break;
        }
        else{
            console.log(i,j);
        }
    }
}

// for of 

// uses to looping in iterators like array linked list etc,

let arr2 = [1,2,3,'rahu',null,[1,2,[3,4]],8];
for(let i of arr2){
    console.log(i); // i is pointing elements in array so no need to write arr[i]
}

// for-in

// used to iterate in objects

let person={
    name:'Rahul',
    age:19,
    isMale:true
}

for(let i in person){
    console.log(i);  // here i points to key
    console.log(person[i]);
}


