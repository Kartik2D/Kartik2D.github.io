var obj_note = [];
var playHead = 0;
var playHeadPrev = 0;
var playSpeed = 2;

var notes = ["C4","D4","E4","G4","A4"].reverse();
var cols = ['#42569F','#068587','#4FB99F','#F2B134','#ED553B'];
var synth = new Tone.PolySynth(16, Tone.MonoSynth);

var sWidth = 1000;
var sHeight = 300;

var steps = 32;

var pencilIn = true;

function setup() {

	createCanvas(sWidth, sHeight);
	pixelDensity(1);
	synth.toMaster();

	penButton = createButton('Toggle pen/eraser');
	penButton.mousePressed(penFunc);
	// for (var i = 0; i<10; i++) {
 //    	obj_note.push(new note(sWidth*getRandom(0.05,0.95),sHeight*getRandom(0.05,0.95),getRandom(1,5)));
 //  	}

}

function draw() {

	background('#ffffff')

	for (i = 0; i < steps; i++) {
		for ( j = 0; j < notes.length; j++) {
			var ww = (sWidth/steps);
			var hh = (sHeight/notes.length);
			var ss = dist(i*ww+(ww/2),j*hh+(hh/2),mouseX,mouseY);
			var rr = 10;
			var rrr = 10;
			noStroke();
			fill('#303030');
			if (ss < 15) {
				rr += 20;
			}
			rr += (rrr-rr)/2;
			ellipse(i*ww+(ww/2),j*hh+(hh/2),rr,rr);
		}
	}


	playHead += playSpeed;

	if (playHead > sWidth) {
		playHead = 0;
	}
	stroke(0);
	strokeWeight(4);
  	line(playHead,0,playHead,sHeight);

  	for (var i = 0; i<obj_note.length; i++) {
    	if (obj_note[i].dead == 1) {
      		obj_note.splice(i, 1);
    	}
    	if (obj_note[i] === undefined) {
    	} else {
      		obj_note[i].move();
      		obj_note[i].display();
    	}
  	}

  	playHeadPrev = playHead;

}

function note(xx,yy) {

  this.x = Math.floor((sWidth/steps)*(Math.floor(xx/(sWidth/steps)))+((sWidth/steps)/2));
  this.y = Math.floor((sHeight/notes.length)*(Math.floor(yy/(sHeight/notes.length)))+((sHeight/notes.length)/2));
  this.dead = 0;
  this.pitch = notes[Math.floor(this.y/(sHeight/notes.length))];
  this.canPlay = true;
  this.rad = 30;
  this.rr = 100;

  this.display = function() {
    push();
    translate(this.x,this.y);
    noStroke();
    fill(cols[Math.floor(this.y/(sHeight/notes.length))]);
    this.rr += (this.rad-this.rr)/5;
    ellipse(0,0,this.rr,this.rr);
    pop();
  };

  this.move = function() {
  	if (playHeadPrev <= this.x && playHead >= this.x && this.canPlay) {
  		synth.triggerAttackRelease(this.pitch,0.1);
  		this.rr += 30;
  		this.canPlay = false;
  	} else {
  		this.canPlay = true;
  	}
  };
}

function penFunc() {
	pencilIn = !pencilIn;
}


function mousePressed() {
	if (pencilIn) {
		obj_note.push(new note(mouseX,mouseY));
	} else {
		for (var i = 0; i<obj_note.length; i++) {
    		if ((dist(obj_note[i].x,obj_note[i].y,mouseX,mouseY)) < 20) {
    			obj_note[i].dead = 1;
    		}
		}
	}
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}



