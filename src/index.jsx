// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Calculator from "./Calculator";



ReactDOM.render(<div>
    <App />
    <ul>
        <li>{Calculator.default(1,2)}</li>
        <li>{Calculator.subtract(9,2)}</li>
        <li>{Calculator.multiply(5,8)}</li>
        <li>{Calculator.divide(100,8)}</li>
    </ul>
</div>, document.getElementById("root"));

