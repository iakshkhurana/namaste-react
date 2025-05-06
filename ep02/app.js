import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div",{id:"child"},React.createElement(
    "div",{id:"child"},
    React.createElement("h1",{},"I'm an h1 tag")
));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render()