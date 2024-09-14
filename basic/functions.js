function name() {
    console.log("s");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("m");
    
}
// name();

function add(no1,no2) {
    console.log(no1+no2);
    
}
function add(no1,no2) {
    return no1 + no2;
    
}
// console.log(add(3,5));
add(3,4);

function islogin(username) {
    return `${username} just loggedin`
}

// console.log(islogin("Saksham"));

//02

//rest operation  ... usage

function sum(no1,...no) {
    return no1 +  no;
}
// console.log(sum(11  ,2,3,4,5));


// Object handling in function

const user = {
    name: "saksham",
    price: "999"
}

function objectHanding(anyobject) {
    console.log(`The username is ${anyobject.name} price is ${anyobject.price}`);
}

// objectHanding(user);

// Direct passing object

objectHanding({
    name: "sakshamm",
    price: "888"
});

function calculateCartPrice() {
    
}


