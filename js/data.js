/**
 * Created by Administrator on 2017/2/21.
 */
function dataObj() {
    this.num;
}
dataObj.prototype.init=function () {
    this.num=0;
};
dataObj.prototype.draw=function () {
    var w=can1.width;
    var h=can1.height;
    ctx1.fillStyle="white";
    ctx1.fillText("得分： "+this.num,w*0.5,h-50);
};
dataObj.prototype.reset=function () {
    this.num=0;
}