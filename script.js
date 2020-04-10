let width, height;
let human;
let hokuros = [];

function setup(){
  width = windowWidth;
  height = windowHeight;
  createCanvas(windowWidth, windowHeight);
  human = loadImage("./img/human.jpg")
  for(let i = 0; i < 10; i++){
    hokuros[i] = new Hokuro();
  }
}

function draw(){
  imageMode(CENTER);
  image(human,width/2,height/2,width,height);
  textSize(height / 50);
  textAlign(LEFT, TOP)
  text("Click to reGenerate", 50, 50);
  for(let i = 0; i < num; i++){
    hokuros[i].draw();
  }
}

let count = 0;
let flag = false;
let num = 10;

window.addEventListener("click", function(){
  if(flag && num > 50){
    num = 10;
    flag = false;
  }else if(flag){
    num *= 2;
    flag = false;
    console.log(num);
  }
  for(let i = 0; i < num; i++){
    hokuros[i] = new Hokuro();
  }
  count++;
  if(count > 10){
    flag = true;
    count = 0;
  }
});

window.addEventListener("resize", function(){
  width = windowWidth;
  height = windowHeight;
  resizeCanvas(windowWidth, windowHeight);
});

class Hokuro{
  constructor(){
    this.x = random(width / 2.3, width / 1.8);
    this.y = random(height / 4.8, height / 2.2);
    this.rx = random(1, width / 300);
    this.ry = random(1, height / 300);
    this.a = random(100, 255);
    this.rotate = random(0, 360);
  }
  draw(){
    fill(82, 61, 40, this.a);
    noStroke();
    ellipse(this.x, this.y, this.rx * 2, this.ry * 2);
  }
}
