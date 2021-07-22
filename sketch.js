var ghost;
var ballon,ballon1;
var spookySound;
var PLAY=1;
var END=0;
var gameState=1;
var Path;
var end;
var treasureCollection = 0;
var ghostImg ,spookySoundImg,ballon1Img,ballon2Img,PathImg,endImg;
var ballon1,ballon2;

function preload(){
ghostImg = loadImage("ghost-standing.png");
spookySoundImg = loadSound("spooky.wav");
ballon1Img = loadImage("red_ballon0.png");
ballon2Img = loadImage("green_ballon0.png");  
PathImg = loadImage("background.jpg");
endImg = loadImage("gameover.png");
}

function setup() {
createCanvas(400,600);

Path=createSprite(200,200);
Path.addImage(PathImg);
Path.velocityx = 4;


ghost = createSprite(50,160,20,50);
ghost.addImage(ghostImg);
ghost.scale = 0.5;

ballon1=new Group();
ballon2=new Group();

 
}

function draw() {
    if(gameState===PLAY){
            background(0);
            ghost.x = World.mouseX;
                
            edges= createEdgeSprites();
            ghost.collide(edges);
                
            //code to reset the background
            if(Path.y > 400 ){
            Path.y = height/2;
            }
            console.log("1233333");
            createballon1Image();
            console.log("12333332222");
            createballon2Image();
            console.log("12333333333");

        if (ballon1.isTouching(ghost)) {
            console.log("12333333333 is touching");
            ballon1.destroyEach();
            treasureCollection=treasureCollection+100;
        }else{
            if(ballon2.isTouching(ghost)) {
                gameState = END;
                end = createSprite(200,300);
                end.addImage(endImg);
                end.scale = 0.5;0
                ballon1.destroyEach();
                ballon1.setVelocityYEach(0); 

            }
        }
            drawSprites();
            textSize(20);
            fill(255);
            text("Treasure: "+ treasureCollection,150,30);
    }
}
function createballon1Image() {
    console.log("createballon1Image uoou");
    if (World.frameCount % 200 == 0) {
        console.log("createballon1Image uoou inside if");
    var ballon = createSprite(Math.round(random(50, 350),40, 10, 10));
    ballon.addImage(ballon1Img);
    ballon.scale=0.12;
    ballon.velocityY = 3;
    ballon.lifetime = 150;
    ballon1.add(ballon);
    console.log("createballon1Image end if");
    }
}
    function createballon2Image(){
        console.log("createballon2Image uoou");
        if (World.frameCount % 530 == 0) {
            console.log("createballon2Image uoou if");
        var ballon = createSprite(Math.round(random(50, 350),40, 10, 10));
        ballon.addImage(ballon2Img);
        ballon.scale=0.1;
        ballon.velocityY = 3;
        ballon.lifetime = 150;
        ballon2.add(ballon);
        console.log("createballon2Image uoou inside if");
        }
    }
