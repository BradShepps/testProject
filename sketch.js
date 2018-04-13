let person;
function setup() {
	createCanvas(800, 800, WEBGL);
	person = new Person();
}

function draw() {
	background(0);
	person.display();
	person.walkX(10);
	person.continuous();
}

class Person {

	constructor(){
		this.xspeed = 0;
		this.yspeed = 0;
		this.zspeed = 0;
		this.x = 0;
		this.y = 0;
		this.z = 0;
	}
	walkX(spd){
		this.xspeed = spd;
		this.x += this.xspeed;
	}
	walkY(spd){
		this.yspeed += spd;
		this.x += spd;
	}
	display(){
		ellipse(this.x, this.y, 30, 30);
	}
	continuous(){
		if(this.x > width){
			this.x = -windowWidth+200;
		}
	}
}
