const user =  {
username: "Saksham",
Price: "999",

 welcomemessage: function() {

    console.log(`hello ${this.username}, Welcome to the website`);
    console.log(this);
    
    
 }
}

// user.welcomemessage()
// user.username = "sam";
// user.welcomemessage();

// console.log(this); // here this return empty object beacuse here there is no global scope/object

function chai() {
    console.log(this);  // there are some val in this of node
    
}
chai(); 


function chai() {
    let username = " Saksham";
    console.log(this.username); // this is Used only in object not in FUNCTION
    
}


// Arrow FUNCION

// In Arrow Function There Only We Remove Function And Add Arrow

const chaii = () =>{
    console.log(this);
    
}
// console.log(chaii);

// const addition = (num1,num2) => (num1+num2); // in paranthesis return not required

// console.log(addition(2,3));


// for Returning Object wee have to use paranthesis

const addition = (no1,no2) => ({username:"saksham"});
console.log(addition(1,2));

 

