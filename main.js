nose_x=0;
nose_y=0;
function preload(){
moustache =loadImage('https://i.postimg.cc/52kfsVfc/360-F-260837391-2-ROd-U1i-W4qko-N0bgx-Xy-SAq-QYp-Uye3y-Iv-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
 video = createCapture(VIDEO);
 video.size(300, 300);
 video.hide();
 posenet= ml5.poseNet(video, modelLoaded);
 posenet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('poseNet is initialized');
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("nose x = "+results[0].pose.nose.x);
    console.log("nose y = "+results[0].pose.nose.y);
    nose_x=results[0].pose.nose.x-35;
    nose_y=results[0].pose.nose.y-10;
}
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, nose_x, nose_y, 70, 50);
}

function take_snapshot(){
    save('clown.png');
}