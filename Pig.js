class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/45.jpg");
  }
display(){

if(this.body.speed<3){
  super.display();
}
else{
  World.remove(world, this.body);


}

}
};