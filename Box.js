class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/triangle.png");
    this.Visiblity = 255;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
   
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
   }
};

function score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }
    box1.score();
    box2.score();  
    box3.score();
    box4.score();  
    box5.score();
    log1.score();
    log3.score();
    log4.score();
    log5.score();
}