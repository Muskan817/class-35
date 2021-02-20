var ball1;
var position;
var database;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";


    var databasePosition = database.ref('ball/position');
    //on function = reading the value from db 
    //ref
    //set function = writing the value in db
    
    databasePosition.on("value", readPosition, showError );
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}


function showError(){
  console.log("error in database")
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    console.log(position.y);
    ball1.x = position.x;
    ball1.y = position.y;

}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })

}
