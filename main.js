
function setup() {
    video= createCapture(VIDEO); 
    video.size(550,500);

    canvas=createCanvas(440,440);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    background('#71e5eb')
}

function modalLoaded() {
    console.log('PoseNet Is Initialized!');

}

function gotposes(results) {
 if(results.length > 0){
 console.log(results);
 }
}

