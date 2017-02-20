/**
 * Created by 35908 on 2017/2/18.
 */
var smallFishObj=function () {
    this.x;//横坐标
    this.y;//纵坐标
    this.angle;//角度

    //this.eye=new Image();//眼睛
    this.eye=[];//实现眼镜动作的数组
    this.eyeTime;//眼镜计时器
    this.eyeCount;//眼镜选择器

    this.swim=new Image();//身体

    //this.tail=new Image();//尾巴
    this.tail=[];//实现鱼尾巴动作的数组
    this.tailTime;//尾巴计时器
    this.tailCount;//尾巴选择器
};
smallFishObj.prototype.init=function () {
    this.x=canWidth*0.5+50;
    this.y=canHeight*0.5+50;
    this.angle=0;
    //this.eye.src="./src/babyEye0.png";
    //EYE
    for(var i=0;i<2;i++){
        this.eye[i]=new Image();
        this.eye[i].src="./src/babyEye"+i+".png";
    }
    this.eyeTime=0;
    this.eyeCount=0;

    //BODY
    this.swim.src="./src/babyFade0.png";

    //this.tail.src="./src/babyTail0.png";
    //TAIL
    for(var i=0;i<8;i++){
        this.tail[i]=new Image();
        this.tail[i].src="./src/babyTail"+i+".png";
    }
    this.tailTime=0;
    this.tailCount=0;
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
    //小鱼尾巴动作,根据时间每过50毫秒修改一次图片，一共8张图片
    this.tailTime+=deltaTime;
    if (this.tailTime>50){
        this.tailCount=(this.tailCount+1)%8;
        this.tailTime%=50;
    }
    //小鱼眼镜动作,根据时间每过500毫秒修改一次图片，一共2张图片
    this.eyeTime+=deltaTime;
    if (this.eyeTime<100){
        this.eyeCount=1;
    }else if(this.eyeTime<this.eyeT){
        this.eyeCount=0;
    }else {
        this.eyeTime%=this.eyeT;
        this.eyeT=getEyeT();
    }
    ctx1.save();
    ctx1.translate(this.x,this.y);//将原点定位到此
    ctx1.rotate(this.angle);//设置角度

    var countT=this.tailCount;
    var countE=this.eyeCount;
    ctx1.drawImage(this.tail[countT],-this.tail[countT].width*0.5+24,-this.tail[countT].height*0.5);
    ctx1.drawImage(this.swim,-this.swim.width*0.5,-this.swim.height*0.5);
    ctx1.drawImage(this.eye[countE],-this.eye[countE].width*0.5,-this.eye[countE].height*0.5);
    ctx1.restore();
};
//设置移动方法，三个参数 目标数值，当前数值，变化率%，返回（当前数值+差值*百分比变化率）
function lerpDS(aim,cur,spe) {
    var del=(cur-aim)*spe;
    return aim+del;
}