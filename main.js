function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(30,50);
    video = createCapture(VIDEO);
}

function draw(){
    fill(50,50,50);
    stroke(50,50,50);
    circle(50,50,20);
}

function take_snapshot(){
    save('picture.png');
}

