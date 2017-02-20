/**
 * Created by Administrator on 2017/2/17.
 */
var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;

var lastTime=Date.now();
var deltaTime=0;

var ane;//海葵
var fruit;//果实
var bgPic=new Image();

var bigfish;//大鱼
var smallfish;//小鱼

var mx;//获取鼠标 坐标X
var my;//获取鼠标 坐标Y
document.body.onload=game;
function game() {
    init();
    gameloop();
}
function init() {
     can1=document.getElementById("canvas1");//fish.dust,UI,CIRCLE
     ctx1=can1.getContext("2d");
     can2=document.getElementById("canvas2");//bg,ane,fruit
     ctx2=can2.getContext("2d");

     can1.addEventListener('mousemove',start,false);
     //添加手机端事件
    can1.addEventListener("touchstart",function(e){
        mx=e.touches[0].pageX;
        my=e.touches[0].pageY;
     //   console.log("start",mx);
    });
    can1.addEventListener("touchmove",function(e){
        mx=e.touches[0].pageX;
        my=e.touches[0].pageY;
       // console.log("move",mx);
    });
    can1.addEventListener("touchend",function(e){
        mx=e.changedTouches[0].pageX;
        my=e.changedTouches[0].pageY;
       // console.log("end",mx);
    });

     bgPic.src="./src/background.jpg";

    canWidth=can1.width;
    canHeight=can1.height;

    ane =new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();

    bigfish=new bigFishObj();
    bigfish.init();
    smallfish=new smallFishObj();
    smallfish.init();

    mx=canWidth*0.5;
    my=canHeight*0.5;
};
function gameloop() {
    // 根据PC性能决定帧数
    requestAnimationFrame(gameloop);
    //console.log("loop");
    var now = Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //解决切换TAB时， deltaTime过大，导致果实过大，给它一个上限
    if(deltaTime>40){
        deltaTime=40;
    }
    drawBackground();
    fruitMonitor();
    ane.draw();
    //console.log(deltaTime)
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);

    bigfish.draw();
    smallfish.draw();
    eat();
    feed();
};
function start(e) {
    if(e.offsetX||e.layerX)
    {
        mx= e.offsetX == undefined ? e.layerX:e.offsetX;
        my= e.offsetY == undefined ? e.layerY:e.offsetY;
        //console.log(mx);
    }
}
