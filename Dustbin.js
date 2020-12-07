class Dustbin {
    constructor(x, y) {
      var options = {
        isStatic:true
      };
    this.width = 160;
    this.height = 170;
    this.x = x;
    this.y = y;
     
      this.image = loadImage("dustbin.png")
      this.leftBody = Bodies.rectangle(this.x - this.width/2,this.y - this.height/2,20,170,options)
      this.rightBody = Bodies.rectangle(this.x + this.width/2,this.y - this.height/2,20,170,options)
      this.bottomBody = Bodies.rectangle(this.x ,this.y,160,20,options)

      World.add(world, this.leftBody);
      World.add(world,this.rightBody);
      World.add(world,this.bottomBody);
    };
    display(){
      var posl = this.leftBody.position;
      var posr = this.rightBody.position;
      var posb = this.bottomBody.position;
  
      push();
      translate(posl.x, posl.y);
      rotate(this.angle);
     
     // rectMode(CENTER)
     // rect(0,0,20,this.height);
      pop();

      push();
      translate(posr.x, posr.y);
      rotate(this.angle*-1);
      //rectMode(CENTER)
      //rect(0,0,20,this.height);
     
      pop();

      push();
      translate(posb.x, posb.y-10);
     imageMode(CENTER);
     image(this.image,0,-this.height/2,this.width,this.height)
     
      //rectMode(CENTER)
      //rect(0,0,160,20);
      pop();
      
    };
  };