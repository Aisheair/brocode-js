

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


let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    // console.log(username);
    document.getElementById("myh1").textContent = `hello ${username}`;
    
}


















