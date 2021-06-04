class Snow{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options);
        this.img = loadImage("snow1.jpg");
	    World.add(world, this.body);

	}
	display(){
			var pos=this.body.position;		
			push();
			imageMode(CENTER);
			image(this.img,0,0,this.width,this.height);
			pop();
			
	}

}