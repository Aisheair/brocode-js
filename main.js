

//variable = A comtainer that stores a valu. bhaves as if it were the value it contains.

//1. declaration   let x;
//2. assignment    x = 100;

// let x;
// x = 12300;

// let x = 123;

// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
// console.log(`you are ${age} years old`);
// console.log(`the price is $${price}`);
// console.log(`your gpa is: ${gpa}`);





// how to accept user input

// 1. EASY WAY = window promt
// 2. PROFESSIONAL WAY = HTML textbox


// let username = username = window.prompt("whtats your user name?");

// console.log(username);


// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     // console.log(username);
//     document.getElementById("myh1").textContent = `hello ${username}`;
    
// }



//type conversion = change the datatype of a value to another
//                  (string, number, booleans)

// let age = window.prompt("how old are you??");
// age = Number(age)
// age += 1

// console.log(age, typeof age);

// let x = "Pizza";
// let y = "Pizza";
// let z = "Pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z)

// console.log(x, typeof x); // NaN number
// console.log(y, typeof y); // pizza string
// console.log(z, typeof z); // true boolean 



// let a = "0";
// let b = "0";
// let c = "0";

// a = Number(a);
// b = String(b);
// c = Boolean(c)

// console.log(a, typeof a); // 0 number
// console.log(b, typeof b); // 0 string
// console.log(c, typeof c); // true boolean 

// let a = "";
// let b = "";
// let c = "";

// a = Number(a);
// b = String(b);
// c = Boolean(c)

// console.log(a, typeof a); // 0 number
// console.log(b, typeof b); // string
// console.log(c, typeof c); // false boolean 



// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z)

// console.log(x, typeof x); // NaN number
// console.log(y, typeof y); // undefine string
// console.log(z, typeof z); // false boolean 

// const = a variable that can't be change


// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radious(cm) of a circle:");

// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(`circumference is : ${circumference} cm`);



// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function(){

//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = `circumference of the circle is ${circumference}cm`
// }



// IF STATEMENT = if a condition is true, execute some code 
//                if not, do something else!!


// let age = 5;

// if(age >= 18){
//     console.log("You are old enough to enter!");
// }
// else{
//     console.log("you must be 18+ to enter!!");
    
// }


// let isStudent = false;
// if (isStudent) {  //by default true 
//     console.log("u are a student!!");
    
// } 
// else{
//     console.log("u are not a student!!");
// }


// let age = 25;
// let hasLicense = false;

// if(age >= 16){
//     console.log("You are old enough to drive");
    
//     if(hasLicense){
//         console.log("you have your License");
        
//     }
//     else{
//         console.log("you do not have your license");
        
//     }
// }
// else{
//     console.log("You mustbe 16+  tohave  a license");

// }

// now else-if statement

// let age  = 0;

// if(age >= 100){
//     console.log("you are way too old to enter");
    
// }
// else if(age == 0){
//     console.log("you are justborn fuck off");
    
// }
// else if (age >= 18) {
//     console.log("You are  old enough to enter this site!!!");
// }
// else if(age < 0){
//     console.log("yourage  cant be below 0");
    
// }
// else{
//     console.log("you must be 18+ to enter this site");
    
// }


//  ternary operator  = ashortcut toif{} and else{}statements
//                      helps to assign avariable based on a conditin 
//                      condition ? codeIfTrue : codeIfFalse;


// let age = 21

// let nes = age >= 18 ? "you are an adult" : "you are a minor";

// console.log(nes);

// let time = 16;
 
// let greeting = time < 12 ? "good morning" : "good afternoon";

// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "you are a student" : "you are not a student";
// console.log(message);

// SWITCH = can be an efficient replacement to many if statement

// let day = 7;

// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("it is Tuesday");
//         break;
//     case 3:
//         console.log("it is Wednesday");
//         break;
//     case 4:
//         console.log("it is Thusday");
//         break;
//     case 5:
//         console.log("it is Friday");
//         break;
//     case 6:
//         console.log("it is Saturday");
//         break;
//     case 7:
//         console.log("it is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
        
// }

// let testScore = 66;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     case testScore >= 50:
//         letterGrade = "E";
//         break;
//         default:
//             letterGrade = "F";
// }

// console.log(letterGrade);



// String method = allow you to manipulate and work with text (string)

// let userName = "Brocode";

// console.log(userName.charAt(0)); // depens on what index u put
// console.log(userName.indexOf("o")); // first index of that character
// console.log(userName.lastIndexOf("o")); // last index of that character
// console.log(userName.length); // length of the character
// console.log(userName.toUpperCase()); 
// console.log(userName.toLowerCase()); // length of the character
// console.log(userName.repeat(3)); // repeat a string

// let result = userName.startsWith(" "); 
// // let result = userName.endsWith(" "); 

// if(result){
//     console.log("your username cant start with ' ' ");
    
// }
// else{
//     console.log(userName);
// }


// let userName1 = "    Brocode1      ";

// userName1 = userName1.trim();

// console.log(userName1);


// let phoneNumber = "123-456-789";

// console.log(phoneNumber.padStart(15, "0"));
// console.log(phoneNumber.padEnd(15, "0"));


// // phoneNumber = phoneNumber.replaceAll("-","/") // phoneNumber.replaceAll("what to reples", "what to reples with")
 
// // console.log(phoneNumber);



// // string slicing = creating a substring frome a
// //                  portion of another string

// //                  string.slice(start, end)


// const fullName = "Broshep codesh";

// // let firstName = fullName.slice(0, 3);
// // let lastName = fullName.slice(4);

// // let firstchar = fullName.slice(0, 1);
// // let lastchar = fullName.slice(-1);

// // console.log(firstchar);
// // console.log(lastchar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);


// console.log(firstName);
// console.log(lastName);


// const email = "ankitkargupta@gmail.com";

// let username  = email.slice(0, email.indexOf("@"));
// let extention = email.slice(email.indexOf("@"));
// console.log(username);
// console.log(extention);


// Method chaining = Calling one method after another
//                   in one continuous line of code

// let userName = window.prompt("enter your uusername: ")

// // ------------------------ NO METHOD CHAINING -----------------------


//  userName = userName.trim();
//  let letter = userName.charAt(0);
//  letter = letter.toUpperCase();

//  let extraChar = userName.slice(1)
// extraChar = extraChar.toLowerCase();
// userName = letter + extraChar;

// console.log(userName);



// // ------------------------ METHOD CHAINING --------------------------

// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);


// logical operator = used to combine or manipulate boolean values
//                    (true or false)

//                    AND = &&
//                    OR  = ||
//                    NOT = !     

// const temp = -20;

// if(temp <= 0 || temp > 30 ){
//     console.log("bad");
    
// }
// else{
//     console.log("good");
    
// }


// const isSunny = true;

// if (! isSunny) {
//     console.log("not sunny");
    
// }
// else{
//     console.log("it is sunny");
// }



//   = assignment operator 
//  == comparison operator  ( compareif value are equal )
// === strict equality operator (compare if values & datatype are equal)
// //  != inequality operator
// // !== strict inequality operator

// const PI = "3.14";

// if(PI !== "3.14"){
//     console.log("That is not a PI");
// }
// else{
//     console.log("That is a PI");
// }


// hile loop = repeat some code condition is true


// let userName;

// do{
//     userName = window.prompt("Enter your name");
// }while (userName === "" || userName === null) 

// console.log(`Hello ${userName}`);    


// let loggedIn  = false;
// let userName;
// let password;

// while (!loggedIn) {
//     userName = window.prompt("Enter your username:")
//     password = window.prompt("Enter your password")

//     if(userName === "bro" && password === "444"){
//         loggedIn = true;
//         console.log("You are loged in welcome ");
//     }
//     else{
//         console.log("invalid");
        
//     }
// }


// for loop = repeat  some code a LIMITED amout of times


// for(let i = 10; i > 0; i--0){
//     console.log(i);
// }

// console.log("happy new year");


// for(let i = 1; i <= 20; i++){

//     if(i == 13){
//         // continue; //this will skip the number 13
//         breakk; // the for loop will exit entairly
//     }
//     else{
//         console.log(i);
        
//     }

    
// }


// function = A section of reusable  code
//            Devlare code once, use it whenever you want
//            xall the function to execute that code         

// function happybirthday(username, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username}!`);
//     console.log(`You are ${age} years old`);
    
// }

// happybirthday("brocoede", 25);
// happybirthday("Ankit", 15);

// function add(x, y){
//     // let result = x + y;
//     return x + y
//     // return result;
    
// }
// function substract(x, y){
//     return x - y;
// }
// function multiply(x, y){
//     return y * x;
// }
// function devide(x, y){
//     return y / x;
// }
// function isEven(number){
//     if(number % 2 === 0 ){
//         return true
//     }
//     else{
//         return false
//     }
//     // you can also use
//     // return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email){
//     if (email.includes("@")) {
//         return true;
//     }
//     else{
//         return false
//     }
// }

// console.log(isValidEmail("brosexy.com"));
// console.log(isValidEmail("elonmusk.com"));
// console.log(isValidEmail("zukarboard@meta.com"));




// console.log(isEven(11));



// console.log(add(2, 3));
// or
// let answer = add(2, 3);
// console.log(answer);


// variable scope = where a variable is recognized
//                  and accessible (local vs global)

// let x = 3;

// function1();


// function function1() {
//     let x = 1
//     console.log(x);
    
// }
// function function2() {
//     let x = 2
//     console.log(x);
    
// }



// array = a variable like structure that can hold
//         more than 1 value

// let fruits = ["apple", "orange", "banana", "coconut"]

// // fruits[3] = "coconut"
// // fruits.push("coconut")
// // fruits.unshift("manga")
// // fruits.pop();
// // fruits.shift()

// // let numOfFruits = fruits.length
// // let index = fruits.indexOf("mango")
// fruits.sort().reverse()



// for(let fruit of fruits){
//     console.log(fruit);
    
// }


// spread operator = ... allow an iterable such as an 
//                   array or string to be expanded
//                   into soperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(maximum);
console.log(min);

let userName = "Ankit Kargupta";
let letters = [...userName].join("/");
console.log(letters);


let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"]

let foods = [...fruits, ...vegetables, "eggs", "milk"]

console.log(foods);








