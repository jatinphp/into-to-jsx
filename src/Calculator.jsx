import React from "react";

function add(a1,b1){
    return a1 += b1;
}
function subtract(a2,b2){
    return a2 - b2;
}
function multiply(a3,b3){
    return a3 * b3;
}
function divide(a4,b4){
    return a4 / b4;
}
export default add;
export {subtract,multiply,divide};