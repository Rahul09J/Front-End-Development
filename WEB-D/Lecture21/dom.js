// dom is not javascript engine it is a web api
// d=document o=object m=model
// bina html ke andar gusa html ko manipulate karna

// 1) getElementById
// jo getelementbyid  return karega ye vo object(or element) hai 

let ans = document.getElementById('doc');
console.log(ans);  //<h1 id="doc">Document<h1>

// agar apne same id kisi 2 attribute ko dede to phele occurence vale ko return kar dega 

// properties :

ans.style.color="red";

// 2) getElementByTagName

let ans2 = document.getElementsByTagName('h2');
console.log(ans2);
// return the array 

// agar isko use karna hai to 2 tareeke hai looping and indexing

for(let i of ans2){
    i.style.color = "green";
}

// 3) getElementByClassName

// it return the ayyay because classes to multiple ho sakti hai like tag name tag name bhi multiple ho sakti hai isliye ye array me h3 and h4 print karega
let ans3 = document.getElementsByClassName('mod');
console.log(ans3);

for(let i of ans3){
    i.style.color= 'orange';
}

// (4) querySelector = combination od tagname classname and id 

// it return only one elment jo sabse pehle select hoga

// let ans4 = document.querySelector('h1');  ByTagname
// console.log(ans4);

// let ans4 = document.querySelector('#doc');   byId
// console.log(ans4);

// 5) querySelectorAll

// querySelector only gives first element isliye hum querySelectorAll use karte hai

// it also a array

let ans4 = document.querySelectorAll;
console.log(ans4);

// -----------------------------------------------------------------------------------------------------------------------------------

let p = document.querySelector('p');
// innerText - is a method which has brains that is it will read the style sheet and returns the content accordingly 
console.log(p.innerText);   // My name is 

// textContent has no brains that is it will directly return the entire content without even reading the stylesheet

console.log(p.textContent);  // My name is Rahul Jasoria

// innerHTML return the entire content along with all the tags thatare present in that selected element .

console.log(p.innerHTML);  // My name is <span style="display: none;">Rahul Jasoria</span>

//  p.innerHTML = "bla bla bla bla bla "  // ye change kar dega p tag ke andar ka saman

//-------------------------------------------------------------------------------------------------------------------------------------

// getAttribute 

// let an = document.querySelector('a');

// console.log(an);  //  <a href="www.google.com">google</a>

// an.getAttribute('href');  // www.google.com

//-------------------------------------------------------------------------------------------------------------------------------------
// classList : The classList property returns the CSS classnames of an element.
let h = document.querySelector('h2');
h.classList.add('rah');
console.log(h);
h.classList.remove('rah');

h.classList.toggle('rah'); // return true or false+




h.classList.contains('rah');


//-------------------------------------------------------------------------------------------------------------------------------------
// CRUD = create read update delete

// create element

// ways 1) appendChild
// isme ek time pe ek hi element daal sakte hai
let parent = document.querySelector('section');
let h1 = document.createElement('h1');
parent.appendChild(h1);

h1.innerText="Rahul Jasoria";

// (2) append() : multiple elements ko ek saath daal sakta huu

let h2 = document.createElement('h2');
let h3 = document.createElement('h3');

h2.innerText="h2";
h3.innerText="h3";

parent.append(h2,h3);


// (3) prepend : isse element upar shoe hoga jabki append se neech hota hai

parent.prepend(h2,h3);


//delete ways : 

// remove()
let h6 = document.querySelector('h6');
h6.remove();


// removeChild()
let h5 = document.querySelector('h5');
let parent2 = document.querySelector('section');
parent.removeChild(h5);   // isme bhi sirf ek hi remove hoga

// parent.removeChild(h5,h6); // isme bhi sirf h5 hi select hoga

//------------------------------------------------------------------------------------------------------------------------------------ 


// events like onclick and so on

// ways to add event s:

// 1) inline : adds on html file 

function func(){
    console.log("Button clicked")
}

// 2) External 

let btn = document.querySelector('input');
// btn.onclick = function(){
//     console.log('Input clicked')
// }

let namee = function(){
    console.log('Input clicked 2');
}
// btn.onclick = namee;


// btn.onclick = function(){
//     console.log('safbsih')        ye hi chalega aur phele vale ko over write kar dega 
// }

// isloye el pe jyada function chalane ke liye addEventListner use karege

btn.addEventListener('click',function(){
    console.log('input clicked 1');
});

btn.addEventListener('click',namee);

btn.addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = 'red';
})

let imp = document.querySelector('#name');

imp.addEventListener('input',function(event){  // idhar event ki jagah kuch bhi rakh sakte hai 
    // console.log(event); 
    // console.log(event.data);  // isse single single words print honge
    console.log(event.target.value)
})

// store the value of input in paragraph 
let para= document.querySelector('p');

imp.addEventListener('input',function(event){  
    para.innerText = event.target.value
})

