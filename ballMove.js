var isPlaying = 0;
var isDrag = 0;
var MARGIN = 40;
function preload() {
  sound_huh = loadSound('sounds/huh.mp3');
  sound_squish1 = loadSound('sounds/squish1.mp3');
}

function createStretchy() {
  face = loadImage("assets/face2.png");

  stretchy = createSprite(width/2, 400, 10, 10);

  stretchy.radius = 75 * getRandom(0.5,1);
  stretchy.mass = 1 * getRandom(0.5,1);
  stretchy.restitution = 0.6 * getRandom(0.5,1);

  stretchy.setCollider("circle", 0,0,stretchy.radius/2);

  stretchy.draw = function() {

    fill('#77C4D3');
    strokeWeight(2);
    stroke(255);

    push();
    rotate(radians(this.getDirection()));
    ellipse(0,0, stretchy.radius+(this.getSpeed()/2), stretchy.radius-(this.getSpeed()/2));
    pop();

    push();
    rotate(stretchy.position.x/50);
    image(face, this.x,this.y);
    pop();
    }
}

function bMove() {


  if (mouseIsPressed && isDrag == 1) {
    stretchy.velocity.x = (mouseX-stretchy.position.x)/5;
    stretchy.velocity.y = (mouseY-stretchy.position.y)/5;
    if (isPlaying == 0) {
      //sound_huh.play();
      //sound_huh.rate(getRandom(0.9,1.4));
      isPlaying = 1;
    }
  } else {
    isPlaying = 0;
  }
  stretchy.velocity.y += stretchy.mass;
  if (stretchy.getSpeed() > 5) {
    stretchy.bounce(ground,playHit);
  } else {
    stretchy.collide(ground,onGround);
  }
  if(stretchy.position.x<-MARGIN) stretchy.position.x = width+MARGIN;
  if(stretchy.position.x>width+MARGIN) stretchy.position.x = -MARGIN;
  if(stretchy.position.y<-MARGIN) stretchy.position.y = height+MARGIN;
  if(stretchy.position.y>height+MARGIN) stretchy.position.y = -MARGIN;

}


function onGround() {
  if (!mouseIsPressed) {
    stretchy.velocity.y = 1;
  }
}
function playHit() {
  sound_squish1.play();
  sound_squish1.rate(getRandom(0.8,2.5));
  for (var i = 0; i<6; i++) {
      part.push(new partic(stretchy.position.x,stretchy.position.y));
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function keyPressed() {
  if (keyCode === ENTER) {
    stretchy.radius += 1;
  }
}

function mousePressed(){
  if (dist(mouseX,mouseY,stretchy.position.x,stretchy.position.y) > 200) {
    var xx = getRandom(0.5,1.5);
    var yy = getRandom(0.5,1.5);
    isDrag = 0;
    var newGround = createSprite(mouseX,mouseY,10,10);
    newGround.setCollider("rectangle",0,0,100*xx,100*yy);
    newGround.draw = function() {
      noFill()
      strokeWeight(2);
      stroke(170);
      rect(0,0,100*xx,100*yy);
    }
    newGround.immovable = true;
    ground.add(newGround);
  }
  else {
    isDrag = 1;
  }
}
