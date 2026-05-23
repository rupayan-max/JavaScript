// Javascript is mainly build for client side

console.log("Hello My name is Rupayan Bera");

// variable is a named memory location 

// var 
var myName = "Rupayan"; // Global Scoped 

{
    var secondName = "Love Babbar";
}
console.log(secondName); 

function testvar (){
    var thirdName = "Lakshay";
    
}
testvar()
// console.log(thirdName);


// Let 
{
let nusaiba = 23;
}

// console.log(nusaiba);

function smit (){
    let nusaiba = 23;
    console.log(nusaiba);
}
smit();



// const 
const helloji = "Rupayan"; // const's values canot be edited 
console.log(helloji); 
helloji = "Nusaiba";
console.log(helloji); // const variable can not be redeclered 