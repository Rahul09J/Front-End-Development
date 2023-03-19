// AJAX : Asyncronous Javascript and XML 
// XML is markup language 
// ajax is web technique 

// Application program interface : API : like agar mujhe flight ki ticket book karani hai to hum third party site se ticket book karate hai, like jiss company ki flight book karni hai tpo vo compnay apna data third party app ko deti hai'

let data = '{"ticker":{"base":"BTC","target":"USD","price":"19623.05280003","volume":"15560.21965163","change":"33.42352684"},"timestamp":1664855885,"success":true,"error":""}'

let jsonData = JSON.parse(data);

console.log(jsonData);
console.log(jsonData.ticker.price);


let req = new XMLHttpRequest();
req.open('GET','https://inshorts.deta.dev/news?category=science')

req.send();

console.log(req);


let ul = document.querySelector('ul');

req.onload = function(){
    // console.log(this.response);
    let parseData = JSON.parse(this.response);
    console.log(parseData);
}

req.onerror = function(){
    console.log(this.response);
}

