class Drop{
  constructor(){
    this.x = random(width);
    this.y = random(-1500 , -50);
    this.yspeed = random(4,10);
    this.ylength = random(5,20);
  }
  fall(){
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + 1;
    if(this.y >= height){
      this.y = random(-200 , -100);
      this.yspeed = random(4,10);
      console.log(this.y);
    }
  }
  showDrop(){
    stroke(155 , 50 , 225);
    line(this.x , this.y , this.x , this.y + this.ylength);
    console.log(this.y);
  }
}
