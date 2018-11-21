var shellObj=function(){
    this.x=[];
    this.y=[];
    this.alive=[];
    //设置炮弹属性，1代表英雄，0代表敌人
    //this.property=[];
    //炮弹移动的速度
    this.speed=2;
    //解决炮弹发出之后任然受hero方向的影响
    this.direc=[];

}
shellObj.prototype.num=30;
shellObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=0;
        this.y[i]=0;
        this.alive[i]=false;
        //this.property[i]=0;
    }
}
shellObj.prototype.born=function(i){
    this.alive[i]=true;
    //this.speed[]=2;
        switch (hero.direc) {
            case 1:
                this.direc[i] = 1;
                this.x[i] = hero.x;
                this.y[i] = hero.y - 15;
                break;
            case 2:
                this.direc[i] = 2;
                this.x[i] = hero.x + 15;
                this.y[i] = hero.y;
                break;
            case 3:
                this.direc[i] = 3;
                this.x[i] = hero.x;
                this.y[i] = hero.y + 15;
                break;
            case 4:
                this.direc[i] = 4;
                this.x[i] = hero.x - 15;
                this.y[i] = hero.y;
                break;
        }
}

shellObj.prototype.move=function(){
    for(var i=0;i<this.num;i++) {
        if (this.alive[i]) {
            switch (this.direc[i]) {
                case 1:
                    this.y[i] -= this.speed;
                    if (this.y[i] <= 0) this.alive[i] = false;
                    break;
                case 2:
                    this.x[i] += this.speed;
                    if (this.x[i] >= canWidth) this.alive[i] = false;
                    break;
                case 3:
                    this.y[i] += this.speed;
                    if (this.y[i] >= canHeight) this.alive[i] = false;
                    break;
                case 4:
                    this.x[i] -= this.speed;
                    if (this.x[i] <= 0) this.alive[i] = false;
                    break;
            }
        }
    }
}
shellObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++) {
        if (this.alive[i]) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(this.x[i], this.y[i], 1, 0, 360, false);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }
}