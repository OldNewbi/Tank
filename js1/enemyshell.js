var enemyshellObj=function(){
    this.x=[];
    this.y=[];
    this.speed=2;
    this.alive=[];
    this.direct=[];
}
enemyshellObj.prototype.num=50;
enemyshellObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=0;
        this.y[i]=0;
        this.alive[i]=false;
    }
}
enemyshellObj.prototype.move=function(){
    for(var i=0;i<this.num;i++) {
        if (this.alive[i]) {
            switch (this.direct[i]) {
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
enemyshellObj.prototype.born=function(i,j){
    this.alive[i]=true;
    switch (enemy.direc[j]){
        case 1:
            this.direct[i]=1;
            this.x[i]=enemy.x[j];
            this.y[i]=enemy.y[j]-15
            break;
        case 2:
            this.direct[i] = 2;
            this.x[i] = enemy.x[j] + 15;
            this.y[i] = enemy.y[j];
            break;
        case 3:
            this.direct[i] = 3;
            this.x[i] = enemy.x[j];
            this.y[i] = enemy.y[j] + 15;
            break;
        case 4:
            this.direct[i] = 4;
            this.x[i] = enemy.x[j] - 15;
            this.y[i] = enemy.y[j];
            break;
    }
}

enemyshellObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++) {
        if (this.alive[i]) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.arc(this.x[i], this.y[i], 1, 0, 360, false);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }
}