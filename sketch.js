var myData;
var astronauts = [];

function preload() {
	myData = loadJSON('assets/peopleinspace.json');
}

function setup() {

	createCanvas(windowWidth, windowHeight);
	
	for (var i = 0; i < myData.people.length; i++) {
    
    var astroData= myData.people[i];	
	
		var newAstronaut = new Astronaut(astroData.name, astroData.launchdate);
		astronauts.push(newAstronaut);
	}
}

function draw() {
	background(0,0,50);

	for (var i = 0; i < astronauts.length; i++) {
		var astro = astronauts[i];
		astro.move();
	  astro.display();
	}


}

function Astronaut(name, date) {
  
  this.name= name;
  this.launchDate = date;
  
  var daysInSpace = (Date.now() - Date.parse(this.launchDate)) / 1000 / 60 / 60 / 24;
  

	this.radius = daysInSpace;

	this.x = random(this.radius, width - this.radius);
	this.y = random(this.radius, height - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;

 
  
	this.display = function() {

    stroke(10,20,70);
    fill(255,237,0);
		ellipse(this.x, this.y, this.radius / 8 );
		noStroke();
		fill(200);
		textAlign(CENTER);
		
		if(mouseIsPressed) {
		  if(mouseButton == 'left') {
		    
		    this.x = random(this.radius, width - this.radius);
	      this.y = random(this.radius, height - this.radius);
		    
		  } 
		  else if (mouseButton == 'right') {
		   text(this.name, this.x, this.y + this.radius / 8 + 5);
		   
		    
		  }
		}
	
	
	
	  
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1
			print(this.x);
			print(this.radius);
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1
			print(this.y);
			print(this.radius);
		}
	}

  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}