var myRover = {
  positionX:0,
  positionY:0,
  direction: 'N'
};

function goForward(rover) {
    switch(rover.direction) {
        case 'N':
            if (rover.positionY===5) {
                rover.positionY=-5;
            }
            else {
                rover.positionY++;
            }
            break;
        case 'E':
            if(rover.positionX===5){
                rover.positionX=-5;
            }
            else{
                rover.positionX++;
            }
            break;
        case 'S':
            if(rover.positionY===-5){
                rover.positionY=5;
            }
            else {
                rover.positionY--;
            }
            break;
        case 'W':
        if(rover.positionX===-5){
            rover.positionX=5;
        }
        else {
            rover.positionX--;
        }
            break;
    }

    //console.log("New Rover Position: [" + rover.positionX + ", " + rover.positionY + "]");
}

function goBackward(rover) {
    switch(rover.direction){
        case 'N':
        if(rover.positionY===-5){
            rover.positionY=5;
        }
        else {
            rover.positionY--;
        }
        break;
        case 'E':
        if(rover.positionX===-5){
            rover.positionX=5;
        }
        else {
            rover.positionX--;
        }
            break;
        case 'S':
        if (rover.positionY===5) {
            rover.positionY=-5;
        }
        else {
            rover.positionY++;
        }
        break;
        case'W':
        if(rover.positionX===5){
            rover.positionX=-5;
        }
        else{
            rover.positionX++;
        }
        break;
    }
    //console.log("New Rover Position: [" +rover.positionX+ ", " + rover.positionY +"]");
}


function turnRight(rover){
    switch(rover.direction){
        case 'N':
            rover.direction='E';
            break;
        case 'E':
            rover.direction='S';
            break;
        case 'S':
            rover.direction='W';
            break;
        case 'W':
            rover.direction='N';
            break;
    }
    //console.log("New Rover Direction: " +rover.direction);
}

function turnLeft(rover){
    switch(rover.direction){
        case 'N':
            rover.direction='W';
            break;
        case 'E':
            rover.direction='N';
            break;
        case 'S':
            rover.direction='E';
            break;
        case 'W':
            rover.direction='S';
            break;
    }
    //console.log("New Rover Direction: " +rover.direction);
}

var command=["f","f","b","r","f","r","b","f","f","f","f","f","f","f","f","f"];


for(var i=0;i<command.length;i++) {
        switch(command[i]){
            case 'f':
                goForward(myRover);
                break;
            case 'b':
                goBackward(myRover);
                break;
            case 'r':
                turnRight(myRover);
                break;
            case 'l':
                turnLeft(myRover);
                break;
        }

}

console.log("FINAL Rover Position: [" + myRover.positionX + ", " + myRover.positionY + "]\nFINAL Rover Direction: " + myRover.direction);









//Function Calls
goForward(myRover);
goBackward(myRover);
turnRight(myRover);
turnRight(myRover);
