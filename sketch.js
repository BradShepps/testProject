let x = 10;
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
	var c = color(255);
	background(0);
	rotateX(x);
	noStroke();
	directionalLight(c, -100, -100, -30);
	ambientMaterial(250);
	sphere(100);
	x += .01;
}
