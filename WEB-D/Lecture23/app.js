let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.fillRect(100,100,50,50); // starting coordinate width,starting coordinate height , rectanle ki width , rectangle ki heigth

ctx.strokeStyle = "blue"
ctx.strokeRect(100,100,50,50); // isses rectangle ko boundry milegi

ctx.beginPath();

ctx.moveTo(200,200);
ctx.lineTo(400,400);

ctx.lineTo(0,400);
ctx.lineTo(200,200);
// ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.font = "32px sans-serif"
ctx.fillText('Rahul Jasoria',250,250)
