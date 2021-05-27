function setup(){
    canvas=createCanvas(550,400);
    canvas.position(560,150);
 
    video=createCapture(VIDEO);
    video.size(550,400);
 
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotPoses)
 }
 
 function modelloaded(){
     console.log("Posenet initialized!");
 }
 
 function gotPoses(results){
 if(results.length>0){
     console.log(results);
 }
 }
 
 function draw(){
     background("pink")
 }