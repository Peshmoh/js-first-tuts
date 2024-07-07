//while loop = repeat some code while some condion is true potentially infinate

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("hello", userName);