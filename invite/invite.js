  let x = 450;
  let y = 80;
  let wh = 50;
  let i = 50;
  let iwh = 60;
  let iii = -250;
  let iiiwh = 40;
  let xd = 0;
  let yd = 0;
  let xd2 = - 5000;
  let yd2 = -50;
  let cactusX = 70;
  let cactusY = 250;
  let cW = 40;
  let cH = 200;

function cloud(x, y, wh) {
  push();
  fill(99, 97, 117);
  noStroke();
  ellipse(x, y, wh, wh);
  ellipse(x+30, y-10, wh * 1.5, wh * 1.5);
  ellipse(x + 70, y - 10, wh *1.2, wh* 1.2);
  ellipse(x + 100, y, wh * 1.1, wh * 1.1);
  ellipse(x + 95, y - 20, wh *0.9, wh * 0.9);
  pop();
}

function walls() {
  fill(117, 82, 42);
  stroke(0);
  quad(0, 290, 300, 280, 300, 390,  0, 425);
  quad(300, 240, 1500, 200, 1500, 570, 300, 390);
}

function ducky (xd, yd) {
  push();
  translate(400, 600);
  scale(0.2);
  fill(250, 250, 0);
  circle(xd + 250, yd + 210, 50);
  circle(xd +250, yd + 210, 100);
  ellipse(xd + 300, yd + 300, 200, 125);
   triangle(xd + 360, yd + 250, xd + 420, yd + 225, xd + 400, yd + 290);
  fill('#222222');
  //eye
  ellipse(xd + 220, yd + 200, 12, 17);
  fill(1000);
  //eye
  ellipse(xd + 219, yd + 201, 6, 8);
   fill(250, 215, 0);
  ellipse(xd + 300, yd + 300, 90, 65);
  fill(255,165,0);
  triangle(xd + 205, yd + 230, xd + 170, yd + 215, xd + 200, yd + 200);
noStroke();
  
pop();
}

function ground() {
  fill(21, 59, 18);
  rect(0, 350, 1500, 1000);
}

function pool() {
  fill(68, 207, 235);
  quad(-200, 548, 390, 490, 1500, 720, 500, 1500);
  fill(82, 52, 24);
  quad(0, 520, 390, 480, 390, 490, 0, 530);
  quad(390, 480, 1500, 710, 1500, 730, 390, 490);
  //quad(390, 460, 497, 473, 497, 502, 390, 480);
}

function moon() {
  //fill(13, 0, 21);
  //ellipse(150, 100, 211.5, 211.5);
  //fill(39, 22, 40);
  //ellipse(150, 100, 211, 211);
  //fill(69, 36, 57);
  //ellipse(150, 100, 210, 210);
  //fill(101, 50, 71);
  //ellipse(150, 100, 208, 208);
  //fill(133, 67, 81);
  //ellipse(150, 100, 205, 205);
  //fill(164, 86, 87);
  //ellipse(150, 100, 200, 200);
  //fill(193, 109, 90);
  //ellipse(150, 100, 190, 190);
  //fill(216, 136, 92);
  //ellipse(150, 100, 180, 180);
  //fill(234, 165, 94);
  //ellipse(150, 100, 150, 150);
  fill(245, 197, 100);
  ellipse(150, 100, 100, 100);
}

function cactus (cactusX, cactusY) {
  fill(46, 96, 33);
  noStroke();
  rect(cactusX, cactusY, 40, 200);
  ellipse(cactusX + (40/2), cactusY, 40, 40);
  rect(cactusX - 50, cactusY + 80, 50, 30);
  rect(cactusX - 50, cactusY + 40, 30, 60);
  ellipse(cactusX - 35, cactusY + 40, 30, 30);
  rect(cactusX + 40, cactusY + 120, 50, 30);
  rect(cactusX + 60, cactusY + 80, 30, 60);
  ellipse(cactusX + 75, cactusY + 80, 30, 30);
}

function stars() {
      var sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 6)
    };

    fill (255);
    noStroke();
    ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
}

function setup() {
  createCanvas(2500, 1500);
}


function draw() {
  colorMode(RGB);
  background(13,0,21);
  stars();
  moon();
  cloud(x, y, wh);
  x = x + 0.3;
  cloud(i, y, iwh * 1.2);
  i = i + 0.2;
  cloud(iii, y + 40, iiiwh);
  iii = iii + 0.4;
  if (x > 1500) {
     x = -200;
   }
   if (i > 1500) {
     i = -200;
   }
   if (iii > 1500) {
     iii = -200;
   }
  textSize(50);
  fill(167, 87, 80);
  stroke(125, 240, 155);
  strokeWeight(3);
  text('pool party, july 9th. 6 P.M.', 400, 60);
  textSize(30);
  text('3412 e. powell pl. chandler, az', 400, 110);
  textSize(20);
  strokeWeight(1);
  text('*sonoran dogs and snacks*', 1100, 60);
  ground();
  walls();
  pool();
  cactus(70, 250);
  cactus(1300, 400);
  cactus(1000, 350);
  cactus(700, 290);
  ducky(xd, yd);
    xd = xd - 2;
  ducky(xd2, yd2);
   xd2 = xd2 + 2;
   if (xd2 > 100) {
     xd2 = 100;
   }
  stroke(159, 230, 133);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = (mouseX / width) * 90;
  // Convert it to radians
  theta = radians(a);
  // Start the tree from the bottom of the screen
  translate(400, 450);
  // Draw a line 120 pixels
  line(0,0,0,-100);
  // Move to the end of that line
  translate(0,-100);
  // Start the recursive branching!
  branch(120);
}

function branch(h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}
