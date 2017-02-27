/**
 * Created by Administrator on 2017/2/24.
 */
function  waveObj() {
    this.alive=[];
    this.x=[];
    this.y=[];
    this.r=[];
    this.c=[];
}
waveObj.prototype.num=10;
waveObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.r[i]=5;
    }
};
waveObj.prototype.drawS=function () {
    ctx1.save();
    ctx1.lineWidth=2;
    ctx1.shadowBlur=10;
    ctx1.shadowColor="red";
    for(var i=0;i<this.num;i++){
        if (this.alive[i]){
            this.r[i]+=deltaTime*0.02;
            if (this.r[i]>50){
                this.alive[i]=false;
                this.r[i]=0;
                //continue;
            }
            var alpha=1-this.r[i]/50;
            var colorStyle="";
            if(this.c[i]=="white"){
                colorStyle="rgba(255,255,255,"+alpha+")";
            }else
            {
                colorStyle= "rgba(255,0,0,"+alpha+")";
            }
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
            ctx1.closePath();
            ctx1.strokeStyle=colorStyle;
            ctx1.stroke();
        }
    }
    ctx1.restore();
};
waveObj.prototype.born=function (x,y,c) {
    //console.log("born");
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            //console.log("draw"+i);
            this.alive[i]=true;
            this.x[i]=x;
            this.y[i]=y;
            if (c=="big"){
                this.c[i]="white";
            }else {
                this.c[i]="red";
            }
           return;
        }
    }
};