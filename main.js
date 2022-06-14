function preload()
{
A=loadImage("dog_cat.jpg");

}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
}


function draw()
{
    image(A,0,0,640,420);
    fill("red");
    text("dog",60,75);
    noFill();
     stroke("red");
     rect(30,60,350,350);
}
