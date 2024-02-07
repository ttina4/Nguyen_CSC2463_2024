var paintbrush;
/*var r = color("#ea412c");
let o = color("#ef8734");
let y = color("#fff84a");
let g = color("#77f23b");
let lb = color("#74f9fc");
let db = color("#0044f7");
let p = color("#e95dfa");
let b = color("#774315");
let w = color(255);
let bl = color(0);*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  paintbrush = color(0, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function selection() {
  strokeWeight(2);
  stroke(255);
  
  fill(color("#ea412c"));
  square(0, 0, 50);

  fill(color("#ef8734"));
  square(0, 50, 50);

  fill(color("#fff84a"));
  square(0, 100, 50);

  fill(color("#77f23b"));
  square(0, 150, 50);

  fill(color("#74f9fc"));
  square(0, 200, 50);

  fill(color("#0044f7"));
  square(0, 250, 50);

  fill(color("#e95dfa"));
  square(0, 300, 50);

  fill(color("#774315"));
  square(0, 350, 50);

  fill(color(255));
  square(0, 400, 50);

  fill(color(0));
  square(0, 450, 50);

}

function mousePressed() {
  if (mouseX < 50) {
    if (mouseY < 50) {
      paintbrush = color("#ea412c");
    }
    else if (mouseY < 100) {
      paintbrush = color("#ef8734");
    }
    else if (mouseY < 150) {
      paintbrush = color("#fff84a");
    }
    else if (mouseY < 200) {
      paintbrush = color("#77f23b");
    }
    else if (mouseY < 250) {
      paintbrush = color("#74f9fc");
    }
    else if (mouseY < 300) {
      paintbrush = color("#0044f7");
    }
    else if (mouseY < 350) {
      paintbrush = color("#e95dfa");
    }
    else if (mouseY < 400) {
      paintbrush = color("#774315");
    }
    else if (mouseY < 450) {
      paintbrush = color(255);
    }
    else if (mouseY < 500) {
      paintbrush = color(0);
    }
  }
}

function draw() {
  selection();

  if (mouseIsPressed) {
    stroke(paintbrush);
    strokeWeight(3);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
