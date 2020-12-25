class gr{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.width=1000;
        this.height=10;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position;
        push();
        fill("white")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}