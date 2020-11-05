class Trash {
  constructor(x,y,width,height) {

      var opt = {isStatic: true};
      this.body = Bodies.rectangle(x,y,width,height,opt);
      ///this.x=x;
      //this.y=y;
      this.width = width;
      this.height = height;
     // this.image = loadImage("Sprites/trash.png")
      World.add(world, this.body);
  }
  display() {

     var pos=this.body.position;
     

			push()
			//translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill("red");
			//stroke(255)
		//rotate(this.angle)
			rect(this.body.position.x,this.body.position.y,this.width, this.height);
			pop()
  }
};