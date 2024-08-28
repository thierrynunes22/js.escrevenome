function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("green");
   fill("yellow");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY,20, 35);
    }
  }