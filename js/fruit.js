/**
 * Created by Administrator on 2017/2/17.
 */
// 绘制果实
var fruitObj=function () {
  this.alive=[];
    this.orange=new Image();
    this.blue=new Image();
};
fruitObj.prototype.num=30;
fruitObj.prototype.init=function () {
    for (var i=0;i<this.num;i++){
        this.alive[i]=false;
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
};
fruitObj.prototype.draw=function () {

};