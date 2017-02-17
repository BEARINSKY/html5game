/**
 * Created by Administrator on 2017/2/17.
 */
// 绘制果实
var fruitObj=function () {
  this.alive=[];//是否出生
    this.x=[];//横坐标
    this.y=[];//纵坐标
    this.l=[];//大小
    this.spd=[];//生长速度&上浮速度
    this.fruitType=[];//果实颜色 黄/蓝
    this.orange=new Image();
    this.blue=new Image();
};
fruitObj.prototype.num=30;
fruitObj.prototype.init=function () {
    for (var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.l[i]=0;
        this.spd[i]=Math.random()*0.05+0.05;
        this.born(i);
        if(Math.random()<0.05){
            this.fruitType[i]="blue";
        }
        else{
            this.fruitType[i]="orange";
        }
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
};
fruitObj.prototype.draw=function () {
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            var pic;
            if(this.fruitType[i]=="blue"){
                pic=this.blue;
            }else{
                pic=this.orange;
            }
            if (this.l[i]<15){
                this.l[i]+=0.01*deltaTime;//根据两帧之间的时间间隔 实现成长过程中 果实大小百分比
            }
            else{
                this.y[i]-=this.spd[i]*deltaTime;
            }
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            if (this.y[i]<10)//当Y坐标小于10，果实上浮到顶
            {
                this.alive[i]=false;
            }
        }
    }
};
fruitObj.prototype.born=function (i) {
    var aneID=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.x[aneID];
    this.y[i]=canHeight-ane.len[aneID];
    this.l[i]=0;
    this.alive[i]=true;
};
function fruitMonitor() {
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            num++;
        }
        if(num<15){
            //生成一个果实
            sendFruit();
            return
        }
    }
};
function sendFruit() {
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}