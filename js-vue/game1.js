/**
 * Created by Administrator on 2017/2/27.
 */
var game=new Vue({
    el:"#game",
    data: {
        total: 0,
        total1:10,
        txt:"",
        can1:null,
        can2:null,
        ctx1:null,
        ctx2:null,
        canWidth:800,
        canHeight:600,
        lastTime:Date.now(),
        deltaTime:0,
},
    watch:{
    },
    methods: {
            gameloop:function() {
            // 根据PC性能决定帧数
            requestAnimationFrame(gameloop);
            //console.log("loop");
            var now = Date.now();
                this.deltaTime=now-lastTime;
                this.lastTime=now;
            //解决切换TAB时， deltaTime过大，导致果实过大，给它一个上限
            if(this.deltaTime>40){
                this.deltaTime=40;
            }
            console.log(this.deltaTime);
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            // 代码保证 this.$el 在 document 中
            var bgPic=new Image();
            bgPic.src="./src/background.jpg";
            this.can1=document.getElementById("canvas1");//fish.dust,UI,CIRCLE
            this.ctx1=this.can1.getContext("2d");
            this.can2=document.getElementById("canvas2");//bg,ane,fruit
            this.ctx2=this.can2.getContext("2d");
            this.ctx2.drawImage(bgPic,0,0,this.canWidth,this.canHeight);
           // this.gameloop();
        })
    }
});