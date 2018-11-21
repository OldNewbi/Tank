//敌人坦克互相碰撞
function enemyCol(){
    for(var i=0;i<enemy.num;i++){
        for(var j=i+1;j<enemy.num;j++){
            if(enemy.alive[i]&&enemy.alive[j]) {
                var distance = calLength2(enemy.x[i], enemy.y[i], enemy.x[j], enemy.y[j]);
                if (distance < 1300) {
                    enemy.dead(i);
                    //enemy.rebirth(i);
                }
            }
        }
    }
    //console.log(short);
}
function shorts(){
    for(var i=0;i<enemy.num;i++){
        if(!enemy.alive[i]){
            enemy.rebirth(i);
        }
    }
}
function heroshellCol(){
    for(var i=0;i<shell.num;i++){
        for(var j=0;j<enemy.num;j++){
            if(shell.alive[i]&&enemy.alive[j]){
                var distance = calLength2(shell.x[i],shell.y[i],enemy.x[j],enemy.y[j]);
                if(distance<225){
                    shell.alive[i]=false;
                    enemy.dead(j);
                }
            }
        }
    }
}
function enemyshellCol(){
    for(var i=0;i<enemyshell.num;i++){
        if(enemyshell.alive[i]&&hero.alive){
            var distance=calLength2(enemyshell.x[i],enemyshell.y[i],hero.x,hero.y);
            if(distance<225){
                enemyshell.alive[i]=false;
                hero.dead();
            }
        }
    }
}