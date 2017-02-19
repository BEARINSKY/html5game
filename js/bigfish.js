/**
 * Created by 35908 on 2017/2/18.
 */
var bigFishObj=function () {
    this.x;//横坐标
    this.y;//纵坐标
    this.angle;//角度
    this.eye=new Image();//眼睛
    this.swim=new Image();//身体
    this.tail=new Image();//尾巴
};
bigFishObj.prototype.init=function () {
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;
    this.eye.src="./src/bigEye0.png";
    this.swim.src="./src/bigSwim0.png";
    this.tail.src="./src/bigTail0.png";
};
bigFishObj.prototype.draw=function () {
    //鼠标移入画布再执行
    if(mx!=undefined&&my!=undefined)
    {
        this.x=lerpD(mx,this.x,0.96);
        this.y=lerpD(my,this.y,0.96);
    }

    //计算角度
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpA(beta,this.angle,0.5);

    ctx1.save();
    ctx1.translate(this.x,this.y);//将原点定位到此
    ctx1.rotate(this.angle);//设置角度
    ctx1.drawImage(this.eye,-this.eye.width*0.5,-this.eye.height*0.5);
    ctx1.drawImage(this.swim,-this.swim.width*0.5,-this.swim.height*0.5);
    ctx1.drawImage(this.tail,-this.tail.width*0.5+30,-this.tail.height*0.5);
    ctx1.restore();
};
//设置移动方法，三个参数 目标数值，当前数值，变化率%，返回（当前数值+差值*百分比变化率）
//spe,在【0-1】,越靠近1，则实际速度越慢
function lerpD(aim,cur,spe) {
    var del=(cur-aim)*spe;
    return aim+del;
}
//设置转动方法，三个参数 目标数值，当前数值，变化率%，返回（当前数值+差值*百分比变化率）
function lerpA(aim,cur,spe) {
    var del=cur-aim;
    while(del>Math.PI){
        del=del-2*Math.PI;
    }
    while(del<-Math.PI){
        del=del+2*Math.PI;
    }
    return aim+del*spe;
}