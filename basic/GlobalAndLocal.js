// {} => SCOPE
 
let a = 10
const b = 100
var c = 1000

// VAR work as a GLOBAL variable EVERYWHERE

if(true) {

    let a = 20;
    const b = 200;
    var c = 2000;  
    
}
// console.log(a);//10
// console.log(b);//100
// console.log(c);//2000






// NESTED SCOPE

function one() {

    const username =  "Saksham";

    function two() {

        website: "google";
        console.log(username);
        
    }
    console.log(two.website);
    
    two();
}
one();