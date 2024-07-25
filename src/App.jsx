import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import Heading from "./Heading";

function App(){
    const name = "Jatin Dhorajiya";
    const year = new Date().getFullYear();
    const customStyle = {
        color:"red",
        fontSize: "35px"
    }
    return <div>
    <Heading />
    <h2 style={customStyle}>Hello World</h2>
    <h1 className="heading" contentEditable="true" spellCheck="false">This might mean that you need to specify the --mirror option upon cloning as well to get the remotes to your local repo.</h1>
    <p>Alternatively you can include a remote setup script in your repo and reference it in the developer setup manual of your project.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="alt" className="blog-img" />
    <img src="https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg" alt="alt" className="blog-img" />
    <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="alt" className="blog-img" />
    <p>created by {name}</p> 
    <List />
    <p>copyright {year}</p>
     <List /></div>;
}
export default App;