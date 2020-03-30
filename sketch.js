//let ball1 = {x: 300, y: 300, size: 20, vx: 13, vy: 13, color: [38, 113, 224]}
//let ball2 = {x: 400, y: 400, size: 10, vx: 2, vy: 2, color: [178, 103, 235]}
//let ball3 = {x: 600, y: 600, size: 30, vx: 17, vy: 6, color: [42, 222, 201]}

let bouncing_balls = []
let floating_rectangles = []

function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas

for (let i=0; i<200; i++) {

let random_ball = {x: random(0, width),
                  y: random(0, height),
                  size: random(1, 60),
                  vx: random(1, 5),
                  vy: random(1, 5),
                  color: [104, 162, 242]
                }

bouncing_balls.push(random_ball)

    }

for (let i=0; i<50; i++){

  let random_rectangle = {x: random(0, width),
                            y: random(0, height),
                            vx: random(1, 5),
                            vy: random(1, 5),
                            color: [255, 255, 255, 255]


                          }

floating_rectangles.push(random_rectangle)

  }

}

function draw() {

  background(0, 3, 1)


  for (let ball of bouncing_balls){


 fill (ball.color)


 circle(ball.x, ball.y, ball.size)
  ball.x = ball.x + ball.vx
  ball.y = ball.y + ball.vy



if (ball.x >= width) {
      ball.vx = -ball.vx
    }

if (ball.x <= 0) {
      ball.vx = -ball.vx
  }

if (ball.y >= height) {
      ball.vy = -ball.vy
}

if (ball.y <= 0) {
      ball.vy = -ball.vy
       }
    }

    for (let rectangle of floating_rectangles){

noFill()
  stroke(rectangle.color)


 rect(rectangle.x, rectangle.y, rectangle.x, rectangle.y, rectangle.size)
  rectangle.x = rectangle.x + rectangle.vx
  rectangle.y = rectangle.y + rectangle.vy


if (rectangle.x >= width) {
      rectangle.vx = -rectangle.vx
    }

if (rectangle.x <= 0) {
      rectangle.vx = -rectangle.vx
  }

if (rectangle.y >= height) {
      rectangle.vy = -rectangle.vy
}

if (rectangle.y <= 0) {
      rectangle.vy = -rectangle.vy
       }

    }

}

// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
