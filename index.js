const myCanvas = { width: 600, height: 600};
const backgroundColor = [251,213,198];
const lineColor = [242, 184, 216];
const activeLineColor = [255, 105, 97];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 6});

const ball1 = {
    x: 300,
    y: 300,
    size: 80,
    speed: 1,
    fillColor: [189, 236, 182],
    strokeColor: [163, 231, 214],
    ballStrokeWeight: 2,
    Sound: sounds[0],
    leftSound: sounds[1],
    soundLength: 500,
} 

const ball2 = {
    x: 300,
    y: 100,
    size: 50,
    speed: 3,
    fillColor: [294, 169, 221],
    strokeColor: [150, 111, 214],
    ballStrokeWeight: 2,
    Sound: sounds[1],
    leftSound: sounds[3],
    soundLength: 1000,
} 

const ball3 = {
    x: 300,
    y: 500,
    size: 100,
    speed: 2,
    fillColor: [251,204, 209],
    strokeColor: [234, 137, 154],
    ballStrokeWeight: 2,
    Sound: sounds[2],
    leftSound: sounds[0],
    rightSound: sounds[1],
    soundLength: 500,
 
} 

const leftEdge = {
    x1: 100,
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

    console.log(sounds);
    ball1.Sound = sounds[0];
    ball2.Sound = sounds[1];
    ball3.Sound = sounds[2];
    
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
        ball.rightSound.play();
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        ball.leftSound.play();
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
