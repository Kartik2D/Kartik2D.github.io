var part = [];

function createBurst(amt,x,y) {
  for (var i = 0; i<amt; i++) {
    part.push(new pBurst(x,y));
  }
}
function createBurst2(amt,x,y) {
  for (var i = 0; i<amt; i++) {
    part.push(new pBurst2(x,y));
  }
}
function createflame(amt,x,y) {
  for (var i = 0; i<amt; i++) {
    part.push(new flame(x,y));
  }
}

function drawParticle() {
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
}

function pBurst(xx,yy) {
  this.x = xx;
  this.y = yy;
  this.dead = 0;
  this.rad = getRandom(30,70);
  this.gravity = 0;
  this.hsp = getRandom(-10,10);
  this.vsp = getRandom(-10,10);

  this.display = function() {
    fill('#636b88');
    noStroke();
    ellipse(this.x,this.y,this.rad);
  };

  this.move = function() {
    this.vsp += this.gravity;
    this.x += this.hsp;
    this.y += this.vsp;
    this.rad -= getRandom(1,3);
    if (this.rad < 0) {
      this.dead = 1;
    }
    if (this.y > height) {
      this.dead = 1;
    }
  };
}

function pBurst2(xx,yy) {
  this.x = xx;
  this.y = yy;
  this.dead = 0;
  this.rad = getRandom(20,40);
  this.gravity = 0.3;
  this.hsp = getRandom(-10,10);
  this.vsp = getRandom(-10,0);

  this.display = function() {
    fill('#ffbe50');
    noStroke();
    rectMode(CENTER);
    push();
    translate(this.x,this.y);
    rotate(this.x/20);
    rect(0,0,this.rad,this.rad);
    pop();
  };

  this.move = function() {
    this.vsp += this.gravity;
    this.x += this.hsp;
    this.y += this.vsp;
    this.rad -= getRandom(0.5,1);
    if (this.rad < 0) {
      this.dead = 1;
    }
    if (this.y > height) {
      this.dead = 1;
    }
  };
}

function flame(xx,yy) {
  this.x = xx;
  this.y = yy;
  this.dead = 0;
  this.rad = 10;
  this.gravity = 0.5;
  this.hsp = getRandom(-1,1);
  this.vsp = 10;

  this.display = function() {
    colorMode(HSB);
    fill(227,26,35);
    noStroke();
    rectMode(CENTER);
    push();
    translate(this.x,this.y);
    rotate(this.x/20);
    ellipse(0,0,this.rad);
    pop();
  };

  this.move = function() {
    this.vsp += this.gravity;
    this.x += this.hsp;
    this.y += this.vsp;
    this.rad += getRandom(4,10);
    if (this.y-this.rad > height) {
      this.dead = 1;
    }
  };
}
