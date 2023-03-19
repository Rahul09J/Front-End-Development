$(document).ready(function(){
    // $("li").last().css('color','green');
    // $("li").first().css('color','red');
    // input ke andar ki value lene ke liye use hoga val

    $('input').val();



    // class list me jeses add,remove,toggle,contain krte the 
    // in query we use = .addClass() , .removeClass() , .toggleClass() , .hasClass()

    $('h1').first().addClass('rahul');

    $('h1').first().addClass('rahul jas');


    // remove class

    $('h1').first().removeClass('rahul');
    // $('h1').first().removeClass('rahul jas');

    // toggle : agar class present hai to hat jaegi nhi hai to aa jai 

    $('h1').first().toggleClass('rahul');  // rahul class remove ho chuki thi isse firse aa gyi

    // has class : ye batata hia ki class hai ya nhi agar hai to true otherwise false

    let contain = $('h1').first().hasClass('rahul');   
    console.log(contain);



    // events : 

    // click() 

    $('button').click(function(){
        console.log("Dabadiya")
    })

    // this will point ot only one this jispe manipulation kr rhe ho apnechahe vo koi lement ho 

    $('li').click(function(){ // jese isme ye saare li ko select karega agar apne this keyword nhi likhe ge to ye jispe bhi click click karge use color dega , to this keyword karega ki sirfy usei ko change karega jispe apne click karege
        $(this).css('color','blue')
        $(this).css('font-size','40px') 
    })

    // event linster vala kaam in jquery  on();

    $('input').on('click',function(){
        console.log('done dona don');
    })



    // Promise
     
    let p = new Promise(function(resolve,reject){
        // resolve(); // yaha pe then call hoga
        // reject();  // yaha pe catch call hoga

        // agar dono likhe to 
        resolve();
        reject();
        // yaha pe then hi call hoga kyuki agar ek bar resolve ho gya to ho gya
    })
    p.then(()=> {
        console.log('Paise de diya'); // then resolve ke liye use hota hai
    }).catch(()=>{
        console.log("Paise kha gya") // catch reject vale case ke liye use hoga
    })

    // data bhi print kara sakte hai
    // let p = new Promise(function(resolve,reject){
    //     resolve("10 Rupee");
    // })
    // p.then((data)=> {
    //     console.log(data); 
    // }).catch((data)=>{
    //     console.log(data)
    // })

    // let p2 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         console.log("Feching the Data");
    //         setTimeout(function(){
    //             resolve("1500 Rupee");
    //         },3000)
    //     },1000)
        
    // })
    // p2.then((data)=> {
    //     console.log(data); 
    // }).catch((data)=>{
    //     console.log(data)
    // })

    // call back hell  : function ke andar function ke andar function and so on 

    // let step1 = function(fn){
    //     setTimeout(() => {
    //         console.log('Payment in Progress');
    //         fn();
    //     }, 1000);
    // }
    // let step2 = function(){
    //     setTimeout(() => {
    //         console.log("Paytm pe 10 Rupee prapt hue")
    //     }, 3000);
    // }

    // step1(function(){
    //     step2();
    // })

    // issi cheej ko promise se karna hai 

    let step1 = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('Payment in Progress');
            resolve();
        }, 3000);
    })
    let step2 = function(){
        setTimeout(() => {
            console.log("Paytm pe 10 Rupee prapt hue")
        }, 5000);
    }
    
    step1.then(()=>{
        step2();
    })
    

});


   
