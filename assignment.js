// FEET TO MILE

function feetToMile(feet){
     var mile = feet / 5280;     /*formula for convert feet to mile*/
     return mile;
}

//WOOD CALCULATOR

var needChairWood = 1;
var needTableWood = 1;
var needBedWood = 1;

function woodCalculator(chair, table, bed){

    needChairWood = chair * 1;    /* Calculating Chair Wood*/
    needTableWood = table * 3;   /* Calculating Table Wood*/
    needBedWood = bed * 5;        /* Calculating Bed Wood*/

    return needChairWood + needTableWood + needBedWood;
}

// FIND TINY FRIEND

function tinyFriend(friend){

    var tiny = friend[0];
    for(let i = 0; i < friend.length; i++){
        var element = friend[i];
        var length = element.length;  /* counting friends element character*/
        if (length < tiny){
            tiny = element;
        }
        return tiny; 
    }

}

// BRICK CALCULATOR

var brickCount = 1000;
var firstFloorHeight = 15;
var secondFloorHeight = 12;
var thirdFloorHeight = 10;

function brickCalculator(floor){

    if(floor <= 10){
        return  brickCount * floor * firstFloorHeight;  /* calculate for 1 to 10 th floor*/
    }
    else if(floor > 10 && floor <= 20){
        return brickCount * floor * secondFloorHeight;
    }
    else{
        return brickCount * floor * thirdFloorHeight
    }
}
