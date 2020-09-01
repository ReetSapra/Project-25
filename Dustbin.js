class Dustbin {
    constructor(x, y,width,height) {
      this.image = loadImage("Bin/Bin.png");
      var options = {
          isStatic:true 
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      imageMode(CENTER);
      fill("yellow");
      image(this.image, 700, 545, 100, 100);
      //rectMode (CENTER);
      //rect(0,0,this.width,this.height)
      pop();
    }
  };
  