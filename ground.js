class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width = 800;
        this.height = 40;
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x,pos.y, this.width,this.height);
      }
}
