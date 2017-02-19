/**
 * Created by 35908 on 2017/2/18.
 */
var smallFishObj=function () {
    this.x;//横坐标
    this.y;//纵坐标
    this.angle;//角度
    this.eye=new Image();//眼睛
    this.swim=new Image();//身体
    this.tail=new Image();//尾巴
};
smallFishObj.prototype.init=function () {
    this.x=canWidth*0.5+50;
    this.y=canHeight*0.5+50;
    this.angle=0;
    this.eye.src="./src/babyEye0.png";
    this.swim.src="./src/babyFade19.png";
    this.tail.src="./src/babyTail0.png";
};
smallFishObj.prototype.draw=function () {
    //鼠标移入画布再执行
    //小鱼可以公用大鱼的 移动方法lerpD()和转动方法lerpA()
    //将小鱼的目标坐标设定为大鱼的目标坐标

    //计算角度
    var deltaY=bigfish.y-this.y;
    var deltaX=bigfish.x-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpA(beta,this.angle,0.1);
    //小鱼的速度，如果两条鱼之间距离小于50，则速度为逐渐降低到0，
    var spe=0.99;
    var BSL=calL(this.x,this.y,bigfish.x,bigfish.y);
    if (BSL<2500) {
        spe=0.99+0.01*(1-BSL/2500);
    }else{spe=0.99;}
    if(mx!=undefined&&my!=undefined) {
        this.x=lerpDS(bigfish.x,this.x,spe);
        this.y=lerpDS(bigfish.y,this.y,spe);}

    ctx1.save();
    ctx1.translate(this.x,this.y);//将原点定位到此
    ctx1.rotate(this.angle);//设置角度
    ctx1.drawImage(this.eye,-this.eye.width*0.5,-this.eye.height*0.5);
    ctx1.drawImage(this.swim,-this.swim.width*0.5,-this.swim.height*0.5);
    ctx1.drawImage(this.tail,-this.tail.width*0.5+25,-this.tail.height*0.5);
    ctx1.restore();
};
//设置移动方法，三个参数 目标数值，当前数值，变化率%，返回（当前数值+差值*百分比变化率）
function lerpDS(aim,cur,spe) {
    var del=(cur-aim)*spe;
    return aim+del;
}