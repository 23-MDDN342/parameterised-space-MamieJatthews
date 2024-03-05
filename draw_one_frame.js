

function draw_one_frame(cur_frac) {
	noStroke();
	fill(100, 100, 214); // weird
	rect(0, 0, width, height);
  
	//let sun_size = canvasHeight/8;
	push()
	translate(width/2, height/2)
	noFill();

	rect(0.6*width, 0.6*height, 0.4*width, 0.4*height);

	//rect(-width/6, -height/4, width/3, height/2);
	strokeWeight(2);
	stroke(200);
	beginShape();
	vertex(-width/16, -height/4);
	vertex(-width/6, -height/8);
	vertex(-width/6, height/8);
	vertex(-width/16, height/4);
	vertex(width/16, height/4);
	vertex(width/6, height/8);
	vertex(width/6, -height/8);
	vertex(width/16, -height/4);
	endShape(CLOSE);

	fill(200)
	ellipse(0,0, width/ 100)
  
	// stroke(0);
	// line(width/2, height/2, width/2, height); // this draws this : /  \
	// line(0.40*width, height/2, 0.20*width, height);
	// line(0.60*width, height/2, 0.80*width, height);
  
	strokeWeight(10);
	let grid_points = [
	  0.50 * height,
	  0.53 * height,
	  0.60 * height,
	  0.75 * height,
	  1.00 * height
	]
  
	if (debugView) {
	  strokeWeight(1);
	  stroke(255, 0, 0);
	  for(let i=0; i<grid_points.length; i++) {
		line(0, grid_points[i], width, grid_points[i]);
	  }
	}
  
	strokeWeight(2);
	stroke(0);
	for(let i=0; i<grid_points.length-1; i++) {
	  let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
	  line(width/2 - 100, cur_grid_line, width/2 + 100, cur_grid_line);
	}




pop()
  }


// var x = 300;
// var y = 300;
// var a = 100;
// var b = 100;
// // this is the fireworks example
// function draw_one_frame() {
// 	//background(255);
// 	x += 2;
// 	y += 2;
// 	a -= 2;
// 	b -= 2;
// 	strokeWeight(1);
// 	translate(width / 2, height / 2);
// 	for (var i = 0; i < 15; i++) {
// 		for (var k = 0; k < 20; k++) {
// 			stroke(255, 255, 255);
// 			rotate(PI / 12.0);
// 			fill(255, 255 - i * 10, 255 - k * 10);
// 			line(a % 100, b % 100, x % 300, y % 300);
// 			//ellipse((x + i * 20) % width, (y + k * 20) % height, i + 4, i + 4);
// 			//drawtriangle((a - i * 20) % width, (b - k * 20) % height, k / 8);
// 			//rect(x % width, y % height, k + 10, k + 10);
// 			fill(0, i * 10, 255 - k * 10);
// 			ellipse((x - i * 20) % width, (y - k * 20) % height, i + 3, i + 3);
// 			rotate(PI / 24.0);
// 			fill(255 - (i + k) * 5, (i + k) * 7, i * 20);
// 			//drawtriangle((a + i * 20) % width, (b + k * 20) % height, k / 8);
// 			//rect(a % width, b % height, k + 5, k + 5);
// 			drawflower(k, x);
// 		}
// 	}
	

// }

// function drawtriangle(x, y, r) {
// 	triangle(x, y, x + 7 * r, y - 13.75 * r, x + 14 * r, y);
// }

// function drawflower(i, k) {
// 	if (i % 2 == 1) {
// 		fill(255, (k * 0.4) % 255, 30);
// 		stroke(k % 255, 255, 0);
// 		arc(0, 0, 150 + i + 150 * sin(k * PI / 24), 150, 0, PI / 40);
// 	} else {
// 		fill(k % 255, 0, 255);
// 		stroke(0, (k * 0.4) % 255, 255);
// 		arc(0, 0, (100 + 100 * cos(k * PI / 24)) % 255, 50, 0, PI / 20);
// 	}
	
// }