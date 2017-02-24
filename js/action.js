/**
 * Created by Administrator on 2017/2/19.
 */
//大鱼吃果实
function eat() {
    for (var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            //计算距离 var l是距离的平方
            var l=calL(bigfish.x,bigfish.y,fruit.x[i],fruit.y[i]);
            if (l<600){
                fruit.dead(i);
                data.num++;
            }
        }
    }
}
var feedFlat=true;//大鱼靠近小鱼，直到，大鱼远离小鱼，期间只触发一次feed()
//大鱼喂食小鱼
function feed() {
    var l=calL(bigfish.x,bigfish.y,smallfish.x,smallfish.y);
    if (l<600){
        if (feedFlat){
            smallfish.eat();
            console.log("小鱼被喂食了");
            data.reset();
            feedFlat=false;
        }
    }else{
        feedFlat=true;
    }
}
//计算距离的平方
function calL(x1,y1,x2,y2) {
    return Math.pow(x1-x2,2)+Math.pow(y1-y2,2);//math.pow表示计算数值的幂次方
}