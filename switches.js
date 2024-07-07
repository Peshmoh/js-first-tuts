//switch= statement that examines a value for a amatch against many case clauses.
//more efficient than"else if"statement


let grade = 99;

switch(true){
case grade >=90:
console.log("you did great!");
break;

case grade >=80:
console.log("you did good!");
break;

case grade >=70:
console.log("you did okay!");
break;

case grade >=60:
console.log("you passed...barely");
break;


case grade < 60:
console.log("you did failed!");
break;

default:
    console.log(grade,"its not a letter grade!")



}