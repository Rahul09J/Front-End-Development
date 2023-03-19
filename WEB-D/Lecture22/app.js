// let form = document.querySelector('form');
// form.addEventListener('submit',()=> {
//     console.log('daba diya'); //iske 2 default behaviour hai ek to post request bhejta hai aur browser refresh karta hai
// });     // isse bas ek second ke liye daba diya dikhe ga

let form = document.querySelector('form');
form.addEventListener('submit',(e)=> {
    e.preventDefault();     // isko pata chal jaega apni default functionality njhi karni aur isme daba diya gayab nii hoga
    console.log(form.elements[0].value);   //1st element ko show karega
    console.log(form.elements[1].value); 
});

