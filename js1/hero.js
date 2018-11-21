var heroObj =function(){
    this.x;
    this.y;
    this.alpha;
    //坦克移动的速度
    this.speed;
    //设置坦克方向，1,2,3,4分别表示上，右，下，左
    this.direc=1;
    this.alive;
}
heroObj.prototype.init=function(){
    this.x=canWidth*0.5;
    this.y=canHeight*0.8;
    this.alpha=0;
    this.speed=8;
    this.alive=true;
    //默认坦克朝上
    //this.direc=1;
}
heroObj.prototype.draw=function(){
    ctx.save();
    if(this.alive) {
        this.alpha += deltatime * 0.0004;
        if (this.alpha > 1) this.alpha = 1;
        //console.log(this.alpha);
        ctx.fillStyle = "rgba(255,255,255," + this.alpha + ")";
        ctx.shadowBlur = 1.5;
        ctx.shadowColor = "rgba(255,255,255," + this.alpha + ")";
        switch (this.direc) {
            case 1:
                //this.alize();
                ctx.fillStyle = 'blue';
                ctx.fillRect(this.x - 10, this.y - 15, 5, 30);
                ctx.fillRect(this.x + 5, this.y - 15, 5, 30);
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x - 5, this.y - 10, 10, 20);
                ctx.beginPath();
                ctx.fillStyle = 'yellow';
                ctx.arc(this.x, this.y, 5, 0, 360, false);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y - 15);
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.closePath();
                break;
            case 2:
                //this.alize();
                ctx.fillStyle = 'blue';
                ctx.fillRect(this.x - 15, this.y - 10, 30, 5);
                ctx.fillRect(this.x - 15, this.y + 5, 30, 5);
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x - 10, this.y - 5, 20, 10);
                ctx.beginPath();
                ctx.fillStyle = 'yellow';
                ctx.arc(this.x, this.y, 5, 0, 360, false);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + 15, this.y);
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.closePath();
                break;
            case 3:
                //this.alize();
                ctx.fillStyle = 'blue';
                ctx.fillRect(this.x - 10, this.y - 15, 5, 30);
                ctx.fillRect(this.x + 5, this.y - 15, 5, 30);
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x - 5, this.y - 10, 10, 20);
                ctx.beginPath();
                ctx.fillStyle = 'yellow';
                ctx.arc(this.x, this.y, 5, 0, 360, false);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + 15);
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.closePath();
                break;
            case 4:
                //this.alize();
                ctx.fillStyle = 'blue';
                ctx.fillRect(this.x - 15, this.y - 10, 30, 5);
                ctx.fillRect(this.x - 15, this.y + 5, 30, 5);
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x - 10, this.y - 5, 20, 10);
                ctx.beginPath();
                ctx.fillStyle = 'yellow';
                ctx.arc(this.x, this.y, 5, 0, 360, false);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - 15, this.y);
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.closePath();
                break;
        }
    }
    ctx.restore();
}
heroObj.prototype.dead=function(){
    this.alive=false;
    for(var j=0;j<5;j++) {
        ctx.drawImage(sl[j],this.x-15,this.y-15,25,25);
    }
}
//英雄复活
heroObj.prototype.rebirth=function(){
    this.init();

}
/*heroObj.prototype.alize=function(){
    this.alpha += deltatime * 0.0004;
    if (this.alpha > 1) this.alpha = 1;
    //console.log(this.alpha);
    ctx.fillStyle="rgba(255,255,255," + this.alpha + ")";
    ctx.shadowBlur = 1.5;
    ctx.shadowColor = "rgba(255,255,255," + this.alpha + ")";
}*/