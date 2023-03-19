let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let cellsize = 50;
let snakesize = [[0,0]];
let borderHeight = 600;
let borderWidth = 1000;
let direction = 'right';
let gameover = false;

document.addEventListener('keydown',function(e){
    if(e.key === "ArrowDown"){direction='down'}
    else if(e.key === "ArrowUp"){direction='up'}
    else if(e.key === "ArrowLeft"){direction='left'}
    else{direction='right'}
})

function draw(){

    if(gameover===true){
        clearInterval(clearSnake);
        return;
    }

    ctx.clearRect(0,0,borderWidth,borderHeight);

    for(let cell of snakesize){
        ctx.fillStyle="red";
        ctx.fillRect(cell[0],cell[1],cellsize,cellsize);
    }

}

function update(){
    let headX = snakesize[snakesize.length-1][0];
    let headY = snakesize[snakesize.length-1][1];

    // let newHeadX = headX + cellsize;
    // let newHeadY = headY;

    let newHeadX;
    let newHeadY;

    if(direction==='down'){
        newHeadX=headX;
        newHeadY= headY + cellsize;
        if(newHeadY===borderHeight){
            gameover=true;
        }
    }
    else if(direction==='up'){
        newHeadX=headX;
        newHeadY= headY - cellsize;
        if(newHeadY<0){
            gameover=true;
        }
    }
    else if(direction==='left'){
        newHeadX=headX-cellsize;
        newHeadY= headY;
        if(newHeadX<0){
            gameover=true;
        }
    }
    else{
        newHeadX=headX+cellsize;
        newHeadY= headY;
        if(newHeadX===borderWidth){
            gameover=true;
        }
    }

    snakesize.push([newHeadX,newHeadY]);
    snakesize.shift();
}


let clearSnake = setInterval(function(){
    update();
    draw();
},100)
