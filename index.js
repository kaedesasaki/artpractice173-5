// const backgroundColor = [230,220,190];
const myCanvas = { width: 600, height: 600};
const backgroundColor = [247,176,30];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 3 });

const ball1 = {
    x: 300,
    y: 300,
    size: 100,
    speed: 2,
    fillColor: [237,28,97],
    strokeColor: [219,77,240],
    ballStrokeWeight: 2,
    Sound: sounds[2],
    soundLength: 500,

} 

const ball2 = {
    x: 300,
    y: 400,
    size: 50,
    speed: 5,
    fillColor: [75,224,38],
    strokeColor: [219,77,240],
    ballStrokeWeight: 2,
    Sound: sounds[0],
    soundLength: 500,

} 

const ball3 = {
    x: 300,
    y: 200,
    size: 80,
    speed: 3,
    fillColor: [30,165,247],
    strokeColor: [219,77,240],
    ballStrokeWeight: 2,
    Sound: sounds[1],
    soundLength: 500,
 
} 

const leftEdge = {
    x1: 110,
    y1: 0,
    x2: 110,
    y2: 600,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 470,
    y1: 0,
    x2: 470,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}


const balls = [ball1, ball2, ball3];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    ball1.Sound = sounds[2];
    ball2.Sound = sounds[0];
    ball3.Sound = sounds[1];
    
}
    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }


function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);

    
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}


const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}
