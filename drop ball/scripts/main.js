var balls = 0;
function countBalls(){
    ctx.font="16px Verdana";
    ctx.fillText("Balls: " + balls,300,30);
}
countBalls();

function drop() {
    var XX = 30;
    var YY = 30;
    var i = 0;
    var velocity = 0;
    var random1 =Math.floor((Math.random()*0.5) + 1);
    var random2 = Math.floor((Math.random() * 6) + 3);
    var random3 = Math.floor((Math.random()*25) + random1);
    var random4 = Math.floor((Math.random()*25) + random2);


    var acceleration = random1;
    var angle = random2;
    var broke = false;
    var firstBounce = true;

    function Rotate(x, y, w, h) {

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(i / 180 / Math.PI);
        ctx.drawImage(ball_sprite, -30, -30, w, h);
        ctx.restore();
        i += 10;
    }
    setInterval(Rotate, 5);
    balls++;

    function physics() {
        XX += angle;
        velocity += acceleration;
        YY += velocity;
        if (YY > 385) {
            broke = true;
            if(firstBounce){
                balls++;
            }
            firstBounce = false;
            var temp;
            temp = velocity / 1.1;
            velocity = -temp;
            YY = 385;
        }

        if(broke){
            Rotate(XX+50, YY+random3, 50, 50);
            Rotate(XX-10, YY+random4, 50, 50);
        }
        if(!broke) {
            Rotate(XX, YY, 70, 70);
        }

        ctx.drawImage(dropImg, 3,3, 150, 60);
        ctx.drawImage(grass, 0,345, 600, 100);

    }
    function ballMove() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        physics();

        window.requestAnimationFrame(ballMove);
        countBalls();
    }
    ballMove();
}
