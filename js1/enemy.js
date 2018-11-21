var enemyObj=function(){
    this.x=[];
    this.y=[];
    this.direc=[];
    this.alive=[];
    this.ran=[];
    this.l=[];
    this.shellnum=0;
}
enemyObj.prototype.num=5;
enemyObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=15+(Math.random()*(canWidth-30));
        this.y[i]=15+(Math.random()*canHeight*0.6);
        this.direc[i]=Math.ceil(Math.random()*4);
        this.alive[i]=true;
        this.ran[i]=Math.random()*0.017+0.003;
    }
    this.x=mysort(this.x);
    //console.log(this.x);
    var tmp;
    for(var i=0;i<this.num;i++){
        //var l=calLength2(this.x[i],this.y[i],this.x[i+1],this.y[i+1]);
        if((this.x[i+1]-this.x[i])<20){
            tmp=this.x[i+1]+20;
            if(tmp>=(canWidth-15)){
                tmp=20;
            }
            this.x[i+1]=tmp;
            this.x=mysort(this.x);
        }
    }
    //console.log(this.x);
}
enemyObj.prototype.draw=function(){
    ctx.save();
    ctx.shadowBlur=1.5;
    ctx.shadowColor='silver';
    ctx.strokeStyle='purple';
    ctx.fillStyle='purple';
    for(var i=0;i<this.num;i++){
        if(this.alive[i]) {
            switch (this.direc[i]) {
                case 1:
                    ctx.fillRect(this.x[i] - 10, this.y[i] - 15, 5, 30);
                    ctx.fillRect(this.x[i] + 5, this.y[i] - 15, 5, 30);
                    ctx.fillRect(this.x[i] - 5, this.y[i] - 10, 10, 20);
                    ctx.beginPath();
                    ctx.arc(this.x[i], this.y[i], 5, 0, 360, false);
                    ctx.closePath();
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(this.x[i], this.y[i]);
                    ctx.lineTo(this.x[i], this.y[i] - 15);
                    ctx.lineWidth = 1.5;
                    ctx.closePath();
                    ctx.stroke();
                    break;
                case 2:
                    ctx.fillRect(this.x[i] - 15, this.y[i] - 10, 30, 5);
                    ctx.fillRect(this.x[i] - 15, this.y[i] + 5, 30, 5);
                    ctx.fillRect(this.x[i] - 10, this.y[i] - 5, 20, 10);
                    ctx.beginPath();
                    ctx.arc(this.x[i], this.y[i], 5, 0, 360, false);
                    ctx.closePath();
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(this.x[i], this.y[i]);
                    ctx.lineTo(this.x[i] + 15, this.y[i]);
                    ctx.lineWidth = 1.5;
                    ctx.closePath();
                    ctx.stroke();
                    break;
                case 3:
                    ctx.fillRect(this.x[i] - 10, this.y[i] - 15, 5, 30);
                    ctx.fillRect(this.x[i] + 5, this.y[i] - 15, 5, 30);
                    ctx.fillRect(this.x[i] - 5, this.y[i] - 10, 10, 20);
                    ctx.beginPath();
                    ctx.arc(this.x[i], this.y[i], 5, 0, 360, false);
                    ctx.closePath();
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(this.x[i], this.y[i]);
                    ctx.lineTo(this.x[i], this.y[i] + 15);
                    ctx.lineWidth = 1.5;
                    ctx.closePath();
                    ctx.stroke();
                    break;
                case 4:
                    ctx.fillRect(this.x[i] - 15, this.y[i] - 10, 30, 5);
                    ctx.fillRect(this.x[i] - 15, this.y[i] + 5, 30, 5);
                    ctx.fillRect(this.x[i] - 10, this.y[i] - 5, 20, 10);
                    ctx.beginPath();
                    ctx.arc(this.x[i], this.y[i], 5, 0, 360, false);
                    ctx.closePath();
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(this.x[i], this.y[i]);
                    ctx.lineTo(this.x[i] - 15, this.y[i]);
                    ctx.lineWidth = 1.5;
                    ctx.closePath();
                    ctx.stroke();
                    break;
            }
        }
    }
    ctx.restore();
}
//敌方坦克移动方法
enemyObj.prototype.move=function(){
    for(var i=0;i<this.num;i++) {
        if (this.alive[i]&&this.l[i]<=35){
            this.l[i]+=deltatime*this.ran[i];
            //console.log(this.l[i]);
            switch(this.direc[i]){
                case 1:
                    this.y[i]-=1;
                    if(this.y[i]<=15){
                        this.y[i]=15;
                    }
                    break;
                case 2:
                    this.x[i]+=1;
                    if(this.x[i]>=(canWidth-15)) this.x[i]=canWidth-15;
                    break;
                case 3:
                    this.y[i]+=1;
                    if(this.y[i]>=(canHeight-15)) this.y[i]=canHeight-15;
                    break;
                case 4:
                    this.x[i]-=1;
                    if(this.x[i]<=15) this.x[i]=15;
                    break;
            }
        } else{
            this.l[i]=0;
            this.direc[i]=Math.ceil(Math.random()*4);
            if(this.direc[i]===1&&this.y[i]<=16) this.direc[i]=2;
            if(this.direc[i]===2&&this.x[i]>=(canWidth-16)) this.direc[i]=3;
            if(this.direc[i]===3&&this.y[i]>=(canHeight-16)) this.direc[i]=4;
            if(this.direc[i]===4&&this.x[i]<=16) this.direc[i]=1;
            if(this.alive[i]) {
                this.shellnum++
                if (this.shellnum > 0 && this.shellnum < enemyshell.num) {
                    enemyshell.born(this.shellnum, i);
                } else {
                    this.shellnum = 0;
                    enemyshell.born(this.shellnum, i);
                }
            }
        }

    }
}
//敌方坦克死亡
enemyObj.prototype.dead=function(i){
    this.alive[i]=false;
    for(var j=0;j<5;j++) {
        ctx.drawImage(sl[j],this.x[i],this.y[i],25,25);
    }
    //ctx.clearRect(this.x[i],this.y[i],this.x[i]+25,this.y[i]+25);
    //this.num--;
}
//坦克重生
enemyObj.prototype.rebirth=function(i){
        if (!this.alive[i]) {
            this.x[i] = canWidth * 0.5;
            this.y[i] = 15;
            this.direc[i] = 3;
            this.alive[i] = true;
        }
}
//敌方坦克射击
/*enemyObj.prototype.shoot=function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            this.l[i]+=deltatime*this.ran[i];
            if(this.l[i]>20){
                this.shellnum++;
                if(this.shellnum>0&&this.shellnum<=enemyshell.num) {
                    enemyshell.born(this.shellnum, i);
                }else{
                    this.shellnum=0;
                    enemyshell.born(this.shellnum,i);
                }
                console.log(this.shellnum);
                this.l[i]=0;
            }
        }
    }
}*/

