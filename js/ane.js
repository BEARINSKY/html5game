/**
 * Created by Administrator on 2017/2/17.
 */
// 绘制海葵
 var aneObj=function(){
     this.x=[];
     this.len=[];
};
aneObj.prototype.num=50;
aneObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.x[i]=i*16+Math.random()*20;//横坐标间隔16，误差20
        this.len[i]=200+Math.random()*50;//长度200，误差50
        console.log("s");
    }
};
aneObj.prototype.draw=function () {
    ctx2.save();
    ctx2.globalAlpha=0.6;//透明度
    ctx2.lineWidth=10;//宽度
    ctx2.lineCap="round";//线段端点样式 圆形
    ctx2.strokeStyle="#3b154e";//颜色
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();//开始绘制
        ctx2.moveTo(this.x[i],canHeight);//设置起点
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);//设置终点
        ctx2.stroke();
    }
    ctx2.restore();
};
