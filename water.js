 class Water{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.image=loadImage("images/water.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options);

        World.add(world,this.body);
        
        
    }
   
     display(){
        var position=this.body.position;
        imageMode(CENTER);
        image(this.image, position.x, position.y, this.r, this.r);

    }
    
    



}

