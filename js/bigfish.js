/**
 * Created by 35908 on 2017/2/18.
 */
var bigFishObj=function () {
    this.x;//横坐标
    this.y;//纵坐标
    this.eye=new Image();//眼睛
    this.swim=new Image();//身体
    this.tail=new Image();//尾巴
};
bigFishObj.prototype.init=function () {
    this.x=100;
    this.y=100;
    this.eye.src="./src/bigEye0.png";
    this.swim.src="./src/bigSwim0.png";
    this.tail.src="./src/bigTail0.png";
};
bigFishObj.prototype.draw=function () {
    ctx1.drawImage(this.eye,this.x-this.eye.width*0.5,this.y-this.eye.height*0.5);
    ctx1.drawImage(this.swim,this.x-this.swim.width*0.5,this.y-this.swim.height*0.5);
    ctx1.drawImage(this.tail,this.x-this.tail.width*0.5+30,this.y-this.tail.height*0.5);
};