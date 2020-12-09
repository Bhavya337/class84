canvas=document.getElementById("my_canvas");
Ctx=canvas.getContext("2d");



rover_width=100;
rover_height=90;



mars_img_array=["2img.jpg","3img.jpg","4jpg.png","mars.jpg"];
random_number=Math.floor(Math.random()*4);
console.log("random_number"+random_number);
baground_img=mars_img_array[random_number];
rover_img="rover.png";


rover_x=10;
rover_y=10;


function add(){
    baground_img_Tag=new Image();
    baground_img_Tag.onload=uploadbaground;
  baground_img_Tag.src=baground_img;
  
    rover_img_Tag=new Image();
    rover_img_Tag.onload=uploadrover;
  rover_img_Tag.src=rover_img;

}

function uploadbaground() {
    Ctx.drawImage(baground_img_Tag,0,0,canvas.width,canvas.height);}
    
    
    
    function uploadrover() {
        Ctx.drawImage(rover_img_Tag,rover_x,rover_y,rover_width,rover_height);}


        
        window.addEventListener("keydown",My_key_down);
        function My_key_down(e){

var keypreesed=e.keyCode;
console.log(keypreesed);

if(keypreesed=='38')
{ up();

    console.log("up");


}



if(keypreesed=='40')
{ down();

    console.log("down");

}



if(keypreesed=='37')
{ left();

    console.log("left");

}



if(keypreesed=='39')
{ right();

    console.log("right");

}



        }



        function up(){
            if (rover_y>=0)
            {
                rover_y=rover_y-10;
                uploadbaground();
                uploadrover();
                console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
            }
        }

        function down(){
            if (rover_y<=460)
            {
                rover_y=rover_y+10;
                uploadbaground();
                uploadrover();
                console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
            }
        }
        
        function left(){
            if (rover_x>=0)
            {
                rover_x=rover_x-10;
                uploadbaground();
                uploadrover();
                console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
            }
        }
        
        function right(){
            if (rover_x<=700)
            {
                rover_x=rover_x+10;
                uploadbaground();
                uploadrover();
                console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
            }
        }