// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// Here We Can Write A Function Inside A Paranthesis And call Paranthesis For Calling Function


(function chai() {

    console.log("chai pe lo");
    
}) ();

// NOTE :> in IIFE Function use semiColon at the Last

// Global Scope K Pollution Se Problem Hoti Hai Kai Baar For Removing Those Pollution We use IIFE

( (name) => {
    console.log(`chai pe lo 2 ${name}`);
    
} )("BAAPU");
