// arthematic operator:-
let a=5;
let b=3;
let c=a+b;
console.log("a+b=",a+b);  // or :- console.log("a+b="+ a+b);


// equal to and not equal to:-
let e =5;
let d = "5"; //string -> number then compare
console.log("a == b",a == b); // thats why it give true

//stricter equalto and not equal to its check value and data type
// thats why it so false because string and integer has no comparison
// === and !==


// conditional opertor
let cond1 = a>b; //true
let cond2 = a===b; //true
console.log("cond1 && cond2 = ", cond1 && cond2);


//conditional statement:-if

let age=25;

if(age>18){
    console.log("you can vote");
}
if(age<18){
    console.log("you can not vote");
}


//conditional statement:-if-else
let mode="dark";
let color;
if(mode === "dark"){
    color="black";
}
else{
    color=white;
}
console.log(color);

//conditional statement:-if-elseif-elseif-else
// using break and  continue with conditionally in loop to make control on loop


//ternary operator:-
let price=25;
let result= price >=18 ? "high" : "not high";
console.log(result);


//switch case:-
let car="bmw";
switch (car){
    case "fortuner":
        console.log("fortuner");
        break;
    case "bmw":
        console.log("bmw");
        break;
    default:
        console.log("invalid car");
}




















































