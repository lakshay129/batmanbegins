class batman{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.radius=85;
       
        this.body=Bodies.circle(x,y,this.radius,options);
        

        
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position;
        push();
        fill("black")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}