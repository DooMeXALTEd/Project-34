class Rope{

    constructor(body1, body2, xoffset){
    this.xoffset = xoffset;
    
        var options={
            bodyA: body1,
            bodyB: body2,
           
                }
            this.rope= Constraint.create(options);
            World.add(world, this.rope);
    
    
    
    }
    display(){
    
    var posA= this.rope.bodyA.position;
    var posB= this.rope.bodyB.position;
    stroke("green");
        strokeWeight(4);
        line(posA.x, posA.y, posB.x + this.xoffset, posB.y);
     
    
    }
    
    
    
    
    }