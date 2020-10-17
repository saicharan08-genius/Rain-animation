var d = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 3000 ; i++){
    d[i] = new Drop();
  }
}
function draw() {
  background(230,230,250);
  for(var i = 0; i < d.length ; i++){
  //d[i] = new Drop();
  d[i].fall();
  d[i].showDrop();
  }
}
