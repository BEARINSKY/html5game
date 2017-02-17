/**
 * Created by Administrator on 2017/2/17.
 */
var can1;
var can2;
var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var ane;//海葵
var fruit;//果实
var bgPic=new Image();
document.body.onload=game;
function game() {
    init();
    gameloop();
    drawBackground();
}
function init() {
     can1=document.getElementById("canvas1");
     ctx1=can1.getContext("2d");
     can2=document.getElementById("canvas2");
     ctx2=can2.getContext("2d");

     bgPic.src="./src/background.jpg";

    canWidth=can1.width;
    canHeight=can1.height;

    ane =new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();

};
function gameloop() {
    // 根据PC性能决定帧数
    requestAnimationFrame(gameloop);
    //console.log("loop");
    var now = Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    ane.draw();
    //console.log(deltaTime)
    fruit.draw();
}