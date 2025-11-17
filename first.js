// print statement
console.log("happy raaj");

// variable(declaration-dynamically typed data type define at run time)
Name="happy raaj";
age=20;
price=15.50;
a=null;
b=undefined;
Name=45;
console.log(Name);

//let,char,(var not used)
let gh="school";
let item=23;
item=56;
const pi=3.14;
console.log(gh);
console.log(pi);

let fg; //if we print without define show undefined after assign its gives assign vaue
// we dont do with const it should be initilize first if not it show error.
// bydefault all variable are undefined if not intilize with value.
console.log(typeof(gh));


// object which group of premitive data type most time made with const.
// let change, const no change but const object ho t uske key ko change karsakte hai.object chnage means pura key change kare t error hai.
const student={
    name: "happy",
    age:20,
    section:'k25ep'
};
student["age"] = student["age"] + 1;
student.name ="rohan";
console.log(student["name"]);
console.log(student.age);