//function= define code once,and use it many times.
            //to perform some code,call the function name
let userName = "pesh";
let age = 21;


happyBirthday();
happyBirthday();
happyBirthday();


function happyBirthday(){
    console.log("happy birthday to you");
    console.log("happy birthday to you");
    console.log("happy birthday dear",userName);
    console.log("happy birthday to you");
    console.log("you are ",age, "years old");
}
