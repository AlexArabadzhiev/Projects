var grass = new Image();
grass.src = "images/grass.png";
grass.addEventListener("load", function() {
    ctx.drawImage(grass, 0,345, 600, 100);
}, false);

var box = {"id":"box", "x":3, "y": 3, "w":150, "h":60};
var dropImg = new Image();
dropImg.src = "images/drop.png";
dropImg.addEventListener("load", function() {
    ctx.drawImage(dropImg, 3,3, 150, 60);
}, false);

var ball_sprite = new Image();
ball_sprite.src = "images/ball.png";