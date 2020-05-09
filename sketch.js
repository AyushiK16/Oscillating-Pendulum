const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stick, ball;
var stick1, ball1;
var ground1;



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    rect(CENTER)
    //stick = rect(200,10,100,10);
    stick1 = new Ground(200, 200, 100, 10);
    ground1 = new Ground(200, 390, 400, 10);


    //ball = ellipse(mouseX, mouseY, 10);
    ball1 = new Box(mouseX, mouseY, 20,20);

    chain = new Chain(stick1.body, ball1.body);
}

function draw(){
    background("black");
    Engine.update(engine);
    stick1.display();
    ball1.display();
    chain.display();

    

}
