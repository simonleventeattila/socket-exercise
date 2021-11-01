var socket;

function setup() {
    createCanvas(800,600);
    background(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
    socket = io.connect('http://127.0.0.1:3333')
    socket.on('mouse', newDrawing);

}
function newDrawing(data) {
    noStroke();
    fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
    ellipse(data.x+Math.floor(Math.random()*20), data.y+Math.floor(Math.random()*20), 10, 10); 
}

function mouseDragged() {
    var data ={ 
        x: mouseX,
        y: mouseY
    };

    socket.emit('mouse', data);

    console.log(mouseX + "," + mouseY);
    noStroke();
    fill(57,241,128);
    ellipse(mouseX, mouseY, 10, 10); 
}



function draw() {
   
}