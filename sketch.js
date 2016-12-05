var grav  = 0.2;
var ground;
var shakeAmt = 10;
var lastHeld = 38; //doubles as both an identifier and color
var post1 = 0;
var post2 = 0;
var whoWin = 2;
var canScore = 0;

//score
var p1 = 0;
var p2 = 0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  playerIMG = loadImage("assets/p1.png");
  player2IMG = loadImage("assets/p2.png");
  crownIMG = loadImage("assets/crown.png");

  post1 = (width/2)-100;
  post2 = (width/2)+100;


  makeGround();
  makeGoals();

  goalCheck = createSprite(width/2,height/4);
  goalCheck.setCollider("rectangle",0,5,140,10);
  goalCheck.debug = 0;
  goalCheck.draw = function() {}


  player1 = createSprite((width/2)+300, height/2);
  player1.friction = .98;
  player1.setCollider("circle", 0,0, 20);
  player1.addImage("normal", playerIMG);

  player2 = createSprite((width/2)-300, height/2);
  player2.friction = .98;
  player2.setCollider("circle", 0,0, 20);
  player2.addImage("normal", player2IMG);

  crown = createSprite(-10,-10);
  crown.addImage("normal",crownIMG);

  ball = createSprite(width/2,50);
  ball.held = 0; //functions like "can it be held?"
  ball.isHeld = 0;
  ball.restitution = 0.7;
  ball.setCollider("circle", 0, 0, 20);
  ball.draw = function() {
    colorMode(HSB);
    strokeWeight(2);
    fill(lastHeld,62,99);
    stroke(255);
    ellipse(0,0,40);
  }

  control1 = createSprite(0,0);
  control1.draw = function() {
    colorMode(HSB);
    fill(227,10,60);
    textAlign(CENTER);
    textSize(15);
    noStroke();
    text("Arrow Keys +\n M to shoot \n Press M to dismiss",0,-80);
  }
  control2 = createSprite(0,0);
  control2.draw = function() {
    colorMode(HSB);
    fill(227,10,60);
    textAlign(CENTER);
    textSize(15);
    noStroke();
    text("WASD +\n F to shoot \n Press F to dismiss",0,-80);
  }

}

function draw() {
  background('#333745');


  colorMode(HSB);
  stroke(227,26,35);
  strokeWeight(5);
  line(post1,height/4,post2,height/4);

  noStroke();
  textSize(900);
  fill(227,26,35);
  textAlign(CENTER);
  textStyle(BOLD);
  text(p1,(width)-150,(height/2)+(height/2.5));
  text(p2,(0)+150,(height/2)+(height/2.5));


  screenShake();
  crownMove();
  control1Move();
  player1Move();
  player2Move();
  ballMove();
  drawParticle();
  drawSprites();

  if (p1 > 9) {
    p1 = 0; p2 = 0;
    whoWin = 0;
  }
  if (p2 > 9) {
    p1 = 0; p2 = 0;
    whoWin = 1;
  }

  canScore --;


}
function control1Move() {
  control1.position.x = player1.position.x;
  control1.position.y = player1.position.y;
  if (keyDown("m")) {
    control1.remove();
  }
  control2.position.x = player2.position.x;
  control2.position.y = player2.position.y;
  if (keyDown("f")) {
    control2.remove();
  }
}
function crownMove() {
  if (whoWin == 0) {
    crown.position.x = player1.position.x;
    crown.position.y = player1.position.y - 55;
  }
  if (whoWin == 1) {
    crown.position.x = player2.position.x;
    crown.position.y = player2.position.y - 55;
  }
  if (whoWin == 2) {
    crown.position.x = -100;
  }
}

function ballMove() {

  ball.bounce(ground);
  //ball.debug  = 1;
  ball.velocity.y += 0.3 * 0.8;

  if (ball.overlap(player1)) {
    if (ball.held == 0) {
      ball.isHeld = 1;
      ball.velocity.y = 0;
      ball.position.x = player1.position.x + player1.velocity.x;
      ball.position.y = player1.position.y;
      lastHeld = 0;
    }
  }

  if (ball.overlap(player2)) {
    if (ball.held == 0) {
      ball.isHeld = 1;
      ball.velocity.y = 0;
      ball.position.x = player2.position.x + player2.velocity.x;
      ball.position.y = player2.position.y;
      lastHeld = 232;
    }
  }

  if (keyDown("m")) {
    if (ball.isHeld == 1) {
      if (lastHeld == 0) {
        ball.held = 20;
        ball.isHeld = 0;
        ball.velocity.x = player1.velocity.x*1.3;
        ball.velocity.y = player1.velocity.y*1.3;
      }
    }
  }
  if (keyDown("f")) {
    if (ball.isHeld == 1) {
      if (lastHeld == 232) {
        ball.held = 20;
        ball.isHeld = 0;
        ball.velocity.x = player2.velocity.x*1.3;
        ball.velocity.y = player2.velocity.y*1.3;
      }
    }
  }
  ball.held -= 1;
  if (ball.held < 0)
    ball.held = 0;


  if ((ball.overlap(goalCheck)) &&
     (ball.velocity.y > 0)      &&
     (ball.position.y - 20 > (height/4)) &&
     (canScore < 0) )
     {
       shakeAmt = 20;
       canScore = 10;
       createBurst3(20,ball.position.x,ball.position.y);
       createBurst(20,ball.position.x,ball.position.y);
       if (lastHeld == 0) {
          p1++;
        }
       if (lastHeld == 232) {
          p2++;
        }
     }

}

function player1Move() {
  player1.debug = 0;
  player1.bounce(ground);
  player1.bounce(player2,dropBall);

  if(keyDown(LEFT_ARROW)) {
    player1.velocity.x -= 0.5;
  }
  if(keyDown(RIGHT_ARROW)) {
    player1.velocity.x += 0.5;
  }
  if(keyDown(UP_ARROW)) {
    player1.velocity.y -= 0.7;
    createflame(1,player1.position.x,player1.position.y+10);
  }
  player1.velocity.y += grav;
  player1.rotation = player1.velocity.x*3;
}

function player2Move() {
  player2.debug = 0;
  player2.bounce(ground);
  player2.bounce(player1,dropBall);

  if(keyDown("a")) {
    player2.velocity.x -= 0.5;
  }
  if(keyDown("d")) {
    player2.velocity.x += 0.5;
  }
  if(keyDown("w")) {
    player2.velocity.y -= 0.7;
    createflame(1,player2.position.x,player2.position.y+10);
  }
  player2.velocity.y += grav;
  player2.rotation = player2.velocity.x*3;
}

function dropBall() {
  shakeAmt = 5;
  if (ball.isHeld == 1) {
    //createBurst(6,ball.position.x,ball.position.y);
    createBurst2(6,ball.position.x,ball.position.y);
    if (lastHeld == 0) {
      ball.held = 20;
      ball.isHeld = 0;
      ball.velocity.x = player1.velocity.x*1.3;
      ball.velocity.y = player1.velocity.y*1.3;
    }
    if (lastHeld == 232) {
      ball.held = 20;
      ball.isHeld = 0;
      ball.velocity.x = player2.velocity.x*1.3;
      ball.velocity.y = player2.velocity.y*1.3;
    }
  }
}



function screenShake() {
  camera.position.x = 0 + width/2;
  camera.position.y = 0 + height/2;
  if (shakeAmt > 0) {
    camera.position.x += random(-shakeAmt,shakeAmt);
    camera.position.y += random(-shakeAmt,shakeAmt);
    shakeAmt -= 0.5;
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

function makeGround() {
  ground  = new Group();
  var newGround = createSprite(width/2,height+30,10,10);
  newGround.setCollider("rectangle",0,0,width,100);
  newGround.immovable = true;

  newGround.draw = function() {
    noStroke();
    fill('#1e212b')
    rect(0,0,width,100);
  }
  ground.add(newGround);
  var newGround = createSprite(width/2,0-30,10,10);
  newGround.setCollider("rectangle",0,0,width,100);
  newGround.immovable = true;

  newGround.draw = function() {
    noStroke();
    fill('#1e212b')
    rect(0,0,width,100);
  }
  ground.add(newGround);
  var newGround2 = createSprite(0-30,height/2,10,10);
  newGround2.setCollider("rectangle",0,0,100,height);
  newGround2.immovable = true;

  newGround2.draw = function() {
    noStroke();
    fill('#1e212b')
    rect(0,0,100,height);
  }
  ground.add(newGround2);
  var newGround2 = createSprite(width+30,height/2,10,10);
  newGround2.setCollider("rectangle",0,0,100,height);
  newGround2.immovable = true;

  newGround2.draw = function() {
    noStroke();
    fill('#1e212b')
    rect(0,0,100,height);
  }
  ground.add(newGround2);
}

function makeGoals() {
  var goal1 = createSprite(post1,height/4,10,10);
  goal1.setCollider("circle",0,0,10);
  goal1.immovable = true;

  goal1.draw = function() {
    noStroke();
    fill('#ffbe50')
    ellipse(0,0,20);
  }
  ground.add(goal1);
  var goal1 = createSprite(post2,height/4,10,10);
  goal1.setCollider("circle",0,0,10);
  goal1.immovable = true;

  goal1.draw = function() {
    noStroke();
    fill('#ffbe50')
    ellipse(0,0,20);
  }
  ground.add(goal1);
}
