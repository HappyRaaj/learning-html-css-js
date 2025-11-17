// fo loop:-
for (let count=1;count <=5;count++){
    console.log("Apna college");
}
console.log("loop has ended");
// the variable in loop is local it can not be accessed outside loop.
// infinite loop also form but we never make in programe.

//while loop:-
let x=1;
while(x<=5){
    console.log(x);
    x++;
}

//do-while loop:-
let y=1;
do{
 console.log(y);
    y++;

}while(y<=5);


//for-of-loop:-(using loop over string and array)
let str="happy";
let size=0;
for (let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size=",str);



//for-in-loop:-(used for object in js and also in array)
let student={
    name:"happy",
    age:25,
    cgpa:7.5,
    isPass: true,
};
for (let key in student){
    console.log("key=",key," value=",student[key]);
}
 










































































