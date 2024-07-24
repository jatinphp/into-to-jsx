// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDOM from "react-dom";

const name = "Jatin Dhorajiya";
const year = new Date().getFullYear();
ReactDOM.render(<div>
    <p>This might mean that you need to specify the --mirror option upon cloning as well to get the remotes to your local repo.</p>
    <p>Alternatively you can include a remote setup script in your repo and reference it in the developer setup manual of your project.</p>
    <p>created by {name}</p>
    <p>copyright {year}</p>
    </div>, document.getElementById("root")
    
);

