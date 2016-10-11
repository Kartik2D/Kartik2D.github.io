var obj_petal = [];
var obj_stem = [];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (var i = 0; i<10; i++) {
    obj_petal.push(new petal(window.innerWidth/2,window.innerWidth/4));
  }

  for (var i = 0; i<6; i++) {
    obj_stem.push(new stem(window.innerWidth*getRandom(0.05,0.95),window.innerHeight));
  }

}

function draw() {

  background('#000000')
  //textSize(100);
  //textAlign(CENTER);
  //textStyle(BOLD);
  //text("KARTIK", (window.innerWidth/2), (window.innerHeight/2)+50);

  noFill();
  stroke('#5b87a3');
  ellipse(mouseX,mouseY,100);

//  if (mouseIsPressed) {
    //obj_petal.push(new petal(mouseX,mouseY));
  //}

  for (var i = 0; i<obj_petal.length; i++) {
    if (obj_petal[i].dead == 1) {
      obj_petal.splice(i, 1);
    }
    if (obj_petal[i] === undefined) {
    } else {
      obj_petal[i].move();
      obj_petal[i].display();
    }
  }

  for (var i = 0; i<obj_stem.length; i++) {
    obj_stem[i].display();
    obj_stem[i].move();
  }


}

function petal(xx,yy) {

  this.x = xx;
  this.y = yy;
  this.hsp = getRandom(-10,10);
  this.vsp = getRandom(-10,10);
  this.gravity = 0.2;
  this.speed = 0.1 * getRandom(0.5,2);
  this.max = 4 * getRandom(1,1.3);
  this.xPos = this.x;
  this.dead = 0;

  this.display = function() {
    stroke('#ff2828');
    fill('#522f2f');
    this.xPos = this.x;
    push();
    translate(this.x,this.y);
    rotate(this.xPos/50);
    ellipse(0,0,20,10);
    line(-15,0,0,0);
    pop();
  };

  this.move = function() {
    if (dist(this.x,this.y,mouseX,mouseY) < 300) {
      if (mouseY < this.y) {
        this.vsp -= this.speed;
      }
      if (mouseY > this.y) {
        this.vsp += this.speed;
      }
      if (mouseX < this.x) {
        this.hsp -= this.speed;
      }
      if (mouseX > this.x) {
        this.hsp += this.speed;
      }
    } else {
      this.vsp += this.gravity;
    }

    this.hsp = clampTo(-this.max,this.max,this.hsp);
    this.vsp = clampTo(-this.max,this.max,this.vsp);

    this.x += this.hsp;
    this.y += this.vsp;
    if (this.y > window.innerHeight) {
      this.dead = 1;
    }

  };

}

function stem(xx,yy) {
  this.x = xx;
  this.y = yy;
  this.lengthStem = 150 * getRandom(0.6,1.5);
  this.x1 = xx;
  this.y1 = this.y-this.lengthStem;
  this.xP = xx;
  this.yP = yy;
  this.bare = 0;
  this.density = getRandomInt(6,16);

  this.display = function() {
    stroke('#8dd043');
    fill('#5f7546');
    ellipse(this.xP,this.yP,30);
    line(this.x,this.y,this.xP,this.yP);
    var angle = 0;
    if (this.bare == 0) {
    for (var i = 0; i < this.density; i++) {
        var xPetal = this.xP+sin(angle)*30;
        var yPetal = this.yP+cos(angle)*30;
        push();
        translate(xPetal,yPetal);
        rotate((PI/2)-angle);
        stroke('#ff2828');
        fill('#522f2f');
        ellipse(0,0,20,10);
        line(-15,0,0,0);
        pop();
        angle += TWO_PI/this.density;
      }
    }

  };

  this.move = function() {
    if (dist(xx,this.y-this.lengthStem,mouseX,mouseY)<100) {
      this.x1 = mouseX;
      this.y1 = mouseY;
      if (this.bare == 0) {
        for (var i = 0; i<this.density; i++) {
          obj_petal.push(new petal(this.x1,this.y1));
        }
      }
      this.bare = 1;

    } else {
      this.x1 = xx;
      this.y1 = this.y-this.lengthStem;
    }
    this.xP += (this.x1-this.xP)/5;
    this.yP += (this.y1-this.yP)/5;
  };


}


function clampTo(min,max,x) {
  return Math.min(Math.max(x, min), max);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function mousePressed() {
  obj_stem = [];
  for (var i = 0; i<6; i++) {
    obj_stem.push(new stem(window.innerWidth*getRandom(0.05,0.95),window.innerHeight));
  }
}
