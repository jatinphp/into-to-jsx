import React from "react";
import ReactDOM from "react-dom";

function Heading(){
    const currentTime = new Date().getHours();
    const customTimeStyle = {
        color:"blue"
    }
    let greeting;
    if(currentTime < 12){
        greeting = "Good Morning";
        customTimeStyle.color = "red";
    }else if(currentTime < 18){
        greeting = "Good afternoon";
        customTimeStyle.color = "green";
    }else{
        greeting = "Good night";
    }
    return <h1 style={customTimeStyle}>{greeting} </h1>
}

export default Heading;