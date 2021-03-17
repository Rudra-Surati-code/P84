canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

window.addEventListener("keydown", my_keydown);

function my_keydown() {
    keyPressed = e.keyCode;
    if(keyPressed == '38') {
        car1_up()
    }

    if(keyPressed == '40') {
        car1_down();
    }

    if(keyPressed == '37') {
        car1_left();
    }

    if(keyPressed == '39') {
        car1_right();
    }

    if(keyPressed == '87') {
        car2_up();
    }

    if(keyPressed == '83') {
        car2_down();
    }

    if(keyPressed == '65') {
        car2_left();
    }

    if(keyPressed == '68') {
        car2_right();
    }
}