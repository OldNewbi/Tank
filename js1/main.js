var can;
var ctx;
var lasttime;
var deltatime;
var canWidth;
var canHeight;
var hero;
var enemy;
var sl=[];
var shell;
var knum=0;
var short=0;
var enemyshell;
var wall;
document.body.onload=game;
function game(){
    init();
    lasttime=Date.now();
    deltatime=0;
    gameloop();
}
function init(){
    can=document.getElementById('can1');
    ctx=can.getContext('2d');
    canWidth=can.width;
    canHeight=can.height;

    can.tabIndex=1000;
    can.style.outline="none";
    hero=new heroObj();
    hero.init();
    can.addEventListener('keydown',onkeydown,false);
    //hero.direc=2;
    enemy=new enemyObj();
    enemy.init();
    for(var i=0;i<=4;i++){
        sl[i]=new Image();
        if(i<=1){
            sl[i].src="./img/sl"+(i+1)+".jpeg";
        }else{
            sl[i].src="./img/sl"+(i+1)+".jpg";
        }
    }
    shell=new shellObj();
    shell.init();
    enemyshell=new enemyshellObj();
    enemyshell.init();
    wall=new wallObj();
    wall.init();
}
function gameloop(){
    window.requestAnimationFrame(gameloop);
    var now=Date.now();
    deltatime=now-lasttime;
    lasttime=now;
    //console.log(deltatime);
    ctx.clearRect(0,0,canWidth,canHeight);
    hero.draw();
    enemy.draw();
    enemy.move();
    //enemy.shoot();
    enemyCol();
    heroshellCol();
    enemyshellCol();
    short+=deltatime;
    if(short>4000){
        shorts();
        short=0;
    }

    //enemy.rebirth();
    shell.draw();
    shell.move();

    enemyshell.draw();
    enemyshell.move();
    wall.draw();

}
function onkeydown(e){
    switch (e.code){
        case 'KeyW':
            hero.direc=1;
            hero.y-=hero.speed;
            if(hero.y<=0) hero.y=0+15;
            //console.log(hero.y);
            break;
        case 'KeyD':
            hero.direc=2;
            hero.x+=hero.speed;
            if(hero.x>=canWidth) hero.x=canWidth-15;
            break;
        case 'KeyS':
            hero.direc=3;
            hero.y+=hero.speed;
            if(hero.y>=canHeight) hero.y=canHeight-15;
            break;
        case 'KeyA':
            hero.direc=4;
            hero.x-=hero.speed;
            if(hero.x<=0) hero.x=0+15;
            break;
        case 'KeyJ':
            knum++;
            //shell.property[knum]=1;
            if(knum>=0&&knum<shell.num&&hero.alive) {
                shell.born(knum);
            }else{
                knum=0;
                if(hero.alive) {
                    shell.born(knum);
                }
            }
            //console.log(knum);
            break;
        case 'KeyB':
            hero.rebirth();

    }
}