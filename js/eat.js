/**
 * Created by Administrator on 2017/2/19.
 */
function eat() {
    for (var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            //计算距离 var l是距离的平方
            var l=calL(bigfish.x,bigfish.y,fruit.x[i],fruit.y[i]);
            if (l<600){
                fruit.dead(i);
            }
        }
    }
}
//计算距离的平方
function calL(x1,y1,x2,y2) {
    return Math.pow(x1-x2,2)+Math.pow(y1-y2,2);//math.pow表示计算数值的幂次方
}