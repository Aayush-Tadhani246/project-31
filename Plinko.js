class Plinko{
    constructor(x,y){
       var options ={
           isStatic:true,
           'restitution': 0.2, 
           'friction': 0.4, 
           'density': 0.2
       }

       this.body = Bodies.circle(x,y,5,options);
       this.x = x;
       this.y = y;
       this.diameter = 5;
       World.add(world, this.body);
   }

   display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push()
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.diameter,this.diameter);
    pop();

    
  }
}