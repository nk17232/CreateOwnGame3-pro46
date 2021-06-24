class over{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.width = 30;
        this.image=loadImage("images/rover.png");
        this.body=Bodies.rectangle(this.x, this,y, this.width, this.height, options);

        world.add(this.body);
        
        
    }
   
     display(){
        var position=this.body.position;
        imageMode(CENTER);
        image(this.image, position.x, posiiton.y, this.width, this.height);

    }
    
}