/**
 * Created by Administrator on 2017/2/17.
 */
// 绘制海葵
 var aneObj=function(){
     this.rootx=[];//根部坐标X
     this.headx=[];//头部坐标X
     this.heady=[];//头部坐标Y
     this.amp=[];//振幅
};
aneObj.prototype.num=50;
aneObj.prototype.al=0;
aneObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*20;//横坐标间隔16，误差20
        this.heady[i]=canHeight-250+Math.random()*50;//长度200，误差50
        this.amp[i]=50+50*Math.random();//振幅50加随机数
       // console.log("s");
    }
};
aneObj.prototype.draw=function () {
    ctx2.save();
    ctx2.globalAlpha=0.6;//透明度
    ctx2.lineWidth=12;//宽度
    ctx2.lineCap="round";//线段端点样式 圆形
    ctx2.strokeStyle="#3b154e";//颜色
    this.al+=deltaTime*0.0006;
    var l=Math.sin(this.al);
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();//开始绘制
        ctx2.moveTo(this.rootx[i],canHeight);//设置起点
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.rootx[i]+this.amp[i]*l, this.heady[i]);//设置终点
        ctx2.stroke();
    }
    ctx2.restore();
};
