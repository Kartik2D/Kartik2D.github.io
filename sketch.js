var stretchy;
var face;
var ground;
var part = [];

function setup() {
  createCanvas(1280,720);

  createStretchy();
  makeGround();
  // ground = createSprite(window.innerWidth/2,600,10,10);
  // ground.immovable = true;
  // ground.setCollider("rectangle",0,0,700,100);
  // ground.draw = function() {
  //   noFill();
  // }
}

function draw() {
  background('#333745');

  bMove();

  for (var i = 0; i<part.length; i++) {
    if (part[i].dead == 1) {
      part.splice(i, 1);
    }
    if (part[i] === undefined) {
    } else {
      part[i].move();
      part[i].display();
    }
  }


  drawSprites();
}

function makeGround() {
   ground  = new Group();
  var newGround = createSprite(width/2,height,10,10);
  newGround.setCollider("rectangle",0,0,700,100);
  newGround.immovable = true;

  newGround.draw = function() {
    noFill()
    strokeWeight(2);
    stroke(170);
    rect(0,0,700,100);
  }
  ground.add(newGround);
  var newGround = createSprite(width/2,0,10,10);
  newGround.setCollider("rectangle",0,0,700,100);
  newGround.immovable = true;

  newGround.draw = function() {
    noFill()
    strokeWeight(2);
    stroke(170);
    rect(0,0,700,100);
  }
  ground.add(newGround);
  var newGround2 = createSprite(0,height*getRandom(0.2,0.9),10,10);
  newGround2.setCollider("rectangle",0,0,100,400);
  newGround2.immovable = true;

  newGround2.draw = function() {
    noFill()
    strokeWeight(2);
    stroke(170);
    rect(0,0,100,400);
  }
  ground.add(newGround2);
  var newGround2 = createSprite(width,height*getRandom(0.2,0.9),10,10);
  newGround2.setCollider("rectangle",0,0,100,400);
  newGround2.immovable = true;

  newGround2.draw = function() {
    noFill()
    strokeWeight(2);
    stroke(170);
    rect(0,0,100,400);
  }
  ground.add(newGround2);
}

function partic(xx,yy) {
  this.x = xx;
  this.y = yy+30;
  this.dead = 0;
  this.rad = 10;
  this.gravity = 0.4;
  this.hsp = getRandom(-5,5);
  this.vsp = getRandom(-7,-5);

  //
  this.display = function() {
    fill('#77C4D3');
    noStroke();
    ellipse(this.x,this.y,this.rad);
  };

  this.move = function() {
    this.vsp += this.gravity;
    this.x += this.hsp;
    this.y += this.vsp;
    this.rad -= 0.5;
    if (this.rad < 0) {
      this.dead = 1;
    }
    if (this.y > height) {
      this.dead = 1;
    }
  };

}
