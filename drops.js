class drops{
    constructor(x,y){
        var options={
            isStatic:false,
            density:1,
            restitution:0,
            friction:0.2,
            
        }
        this.radius=3.5;
        this.rain=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.rain)

    }
    display(){
        push();
        var pos=this.rain.position;
        translate(pos.x,pos.y);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
       pop();

    }
        update(){
        if(this.rain.position.y>680){
        Matter.Body.setPosition(this.rain,{x:random(0,800),y:(0,-10)})
        }
        }
}
    
