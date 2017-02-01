//a new take on mars rover

var rover= {
    position:[0,0],
    direction: 'N'
};

//command for where to move:

var command="ffffffffffff";

for(i=0;i<command.length;i++){
    switch(command[i]){
        case "f":
        goForward();
        break;

        case "b":
        goBackward();
        break;

        case "r":
        turnRight();
        break;

        case "l":
        turnLeft();
        break;
    }
}

function goSpherical(){
    if (rover.position[0]>10){
        rover.position[0]=0;
    }
    else if (rover.position[0]<0){
        rover.position[0]=10;
    }
    else if (rover.position[1]>10){
        rover.position[1]=0;
    }
    else if (rover.position[1]<0){
        rover.position[1]=10;
    }
}

function goForward(){
    switch(rover.direction){
    case 'N':
    rover.position[1]++;
    break;
    case 'E':
    rover.position[0]++;
    break;
    case 'S':
    rover.position[1]--;
    break;
    case 'W':
    rover.position[0]--;
    break;
    }
    goSpherical();
}

function goBackward(){
    switch(rover.direction){
    case 'N':
    rover.position[1]--;
    break;
    case 'E':
    rover.position[0]--;
    break;
    case 'S':
    rover.position[1]++;
    break;
    case 'W':
    rover.position[0]++;
    break;
    }
    goSpherical();
}

function turnRight(){
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
    goSpherical();
}

function turnLeft(){
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
    goSpherical();
}

//commands for movement
goForward(rover);
goBackward(rover);
turnRight(rover);
turnLeft(rover);


console.log("Current position of my rover is " + rover.position+ " and current direction is " +rover.direction);
