var totalStars = screen.height/8;
var rocketlocation = 0;
var starMovement = 0;
var velocity = .01;
function setup() {
    createCanvas(screen.width,screen.height);
    arrayStars = [];
    for(var i=0; i<=totalStars; ++i){
        arrayStars.push([random(-width/2,width+10) + starMovement,random(height)]);
    }
    img = loadImage('rocket.png');
  }
function twinkleStars(){
    for(var i = 0; i <= totalStars; i++){
        ellipse(arrayStars[i][0],arrayStars[i][1],3,3);
    }
    for(var j = 0; j <= totalStars/50; j++){
        frameRate(12);
        var currentStar = Math.floor(random(totalStars));
        ellipse(arrayStars[currentStar][0],arrayStars[currentStar][1],random(6),random(6));
    }
    //movenment effect for the stars
    for(var i=0; i<=totalStars; ++i){
        arrayStars[i][0] = (arrayStars[i][0]+starMovement);
    }
    starMovement =starMovement + velocity;
    if(starMovement >= 1){
        velocity = -velocity;
    }
    if(starMovement <= -1){
        velocity = -velocity;
    }
}
  
function draw() {
    background(0,0,0);
    twinkleStars();
    image(img, 10, height-rocketlocation);
    rocketlocation = rocketlocation+1;
    if(height-rocketlocation <=0){
        rocketlocation = 0;
    }

    
}
