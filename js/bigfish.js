/**
 * Created by 35908 on 2017/2/18.
 */
var bigFishObj=function () {
    this.x;//横坐标
    this.y;//纵坐标
    this.angle;//角度
    //this.eye=new Image();//眼睛
    this.eye=[];//实现眼镜动作的数组
    this.eyeTime;//眼镜计时器
    this.eyeCount;//眼镜选择器
    this.eyeT;//眼镜周期
    this.swim=new Image();//身体

    //this.tail=new Image();//尾巴
    this.tail=[];//实现鱼尾巴动作的数组
    this.tailTime;//尾巴计时器
    this.tailCount;//尾巴选择器
};
bigFishObj.prototype.init=function () {
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;
    //EYE
    this.eyeT=3000;
    for(var i=0;i<2;i++){
        this.eye[i]=new Image();
        this.eye[i].src="./src/bigEye"+i+".png";
    }
    this.eyeTime=0;
    this.eyeCount=0;

    //BODY
    this.swim.src="./src/bigSwim0.png";

    //this.tail.src="./src/babyTail0.png";
    //TAIL
    for(var i=0;i<8;i++){
        this.tail[i]=new Image();
        this.tail[i].src="./src/bigTail"+i+".png";
    }
    this.tailTime=0;
    this.tailCount=0;
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

    //小鱼尾巴动作,根据时间每过50毫秒修改一次图片，一共8张图片
    this.tailTime+=deltaTime;
    if (this.tailTime>50){
        this.tailCount=(this.tailCount+1)%8;
        this.tailTime%=50;
    }
    //大鱼眼镜动作,
    this.eyeTime+=deltaTime;
    var flag=this.eyeTime%8000;//设置周期上限8秒
    if (flag>0&&flag<100){//设置闭眼时间0.1秒
        this.eyeCount=1;
    }else{
        if (this.eyeCount==1){//当eyeCount==1,且flag不在100之内，说明是第一次循环到100+，则给eyeTime添加一个随机数，实现随机周期
            var ran=Math.round(Math.random()*5000);
           // console.log(ran);
            this.eyeTime+=ran;
        }
        this.eyeCount=0;
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
function getEyeT() {
    var res=1500+Math.round(Math.random()*4500);
   // console.log(res);
    return res;
}