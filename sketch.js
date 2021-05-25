const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monsterImg ,hero, superheroImg ,  superHero , monster;
var bgImg ;
var block1 , block2, block3, block4,block5 , block6 , block7 , block8 , block9 , block10 , block11 , block12;
var block13 , block14 , block15 , block16 , block17 , block18 , block19 ,block20;

function preload() {
//preload the images here
monsterImg = loadImage("image/Monster-01.png");
superheroImg = loadImage("image/Superhero-01.png");
bgImg = loadImage("image/bg.jpg");


}

function setup() {
  createCanvas(1500, 600);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
   
   block1 = new Block (800,400,50,50);
   block2 = new Block (800,350,50,50);
   block3 = new Block (800,300,50,50);
   block4 = new Block (800,250,50,50);
   block5 = new Block (800,200,50,50);

   block6 =  new Block (900,400,50,50);
   block7 =  new Block (900,350,50,50);
   block8 =  new Block (900,300,50,50);
   block9 =  new Block (900,250,50,50);
   block10 = new Block (900,200,50,50);
   block11 = new Block (900,150,50,50);

   block12 =  new Block (700,400,50,50);
   block13 =  new Block (700,350,50,50);
   block14 =  new Block (700,300,50,50);
   block15 =  new Block (700,250,50,50);
   block16 =  new Block (700,200,50,50);
   block17 =  new Block (700,150,50,50);

   superHero = new Hero(300,250,600,700);
   monster = new Monster(1200,150,100,100);
}

function draw() {
  background(bgImg);
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();




  
  monster.display();
  superHero.display();
  
 
  


}
  

 


function mouseDragged(){
Matter.Body.setPosition(hero.body , { x : mouseX , y : mouseY });


}
