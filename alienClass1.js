class AlienClass1{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.width = 250;
        this.height= 250;
        this.image=loadImage("images/rover.png");
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height);

        World.add(world, this.body);
        
        
    }
   
     display(){
        var position=this.body.position;
        imageMode(CENTER);
        image(this.image, position.x, position.y, this.width, this.height);

    }
    
}