// variable 
// use key words let ,var and const 
var myname ="willington juma"
const number =3566
let age =65
var booleana=true
// naming methods in js 
//using of camel cases 
console.log(typeof(myname))
console.log(typeof(number))
console.log(typeof(booleana))

// working ith operators 
let addition =number+age
console.log("The total after adding is"+addition)
// Calculate how much money you'll have left after buying some treats.
// Figure out how many days are left until your next birthday.
// Determine how many stickers each of your friends will get if you share your sticker collection equally.
// Calculate the area of your room (length * width) and then figure out how many small rugs (each 2 square meters) would fit in it.
let account =4000
let buytree=2000
console.log(`"te amoont remain after buying tress is "+${account-buytree}`)

// Write a program that checks if a person is old enough to watch a certain movie rating.

let movieRating =100;
if(movieRating>=18){console.log("you are not allowed to watch to watch the stalab movie ")}
else{console.log("yu must watch the movie unless ")}
// Make a basic calculator that compares two numbers and tells which one is bigger, smaller, or if they're equal.

if(age >movieRating){console.log(`${age} its is bigger than ${movieRating} `)}
else{console.log(`${age} its is less than ${movieRating} `)}

// Logical Operators: Making Decisions in Code
// Make a login system where a user can access an area if they have the correct password OR if they're an admin
var Name="juma" 
var password=123
if(!password || !Name){
    console.log("password and name is needed")
}else if(password != 1234 || Name != "kamau" ){
    console.log ("wrong details ")
}
// for (initialization; condition; increment) {
//     // Code to be executed
//     // }

for(let i= 1; i< 5; i++){
    console.log(`The value is ${i}`)
}

// functions
function greetUser(){
    console.log("hello user ")
}
greetUser()

function walksteps(stpes){
    console.log("natembea stpes ngapi hivi a week "+stpes)
}
walksteps(45)

// the arrays in java scripts

const names =["juma","willington","onyango ","lanah"]

console.log(names[0])
console.log(names[3])


const kamau =document.getElementById("para")
kamau.style.color="blue"
console.log(kamau.textContent)


const juma =document.getElementsByClassName("myclass")
console.log(juma)

const alert=()=>{
   console.log(alert("button is clicked"))
}