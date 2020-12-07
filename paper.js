class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.8,
            friction:3.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = 35;
        //this.width = width;
        //this.height = height;
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //circleMode(CENTER);
      fill("green");
        circle(pos.x, pos.y, this.radius);
      }
}
