const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var hammer,rubber;
var Iron1,Stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(500,-150,100);
    Iron1 = new Iron(200,10,100);
    Stone1 = new Stone(500,150,100)



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    Iron1.display();
    Stone1.display();

    
 
}