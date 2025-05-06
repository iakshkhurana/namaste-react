/*
<div id="parent">
    <div id="child">
    </div>
</div>
*/
const parent = React.createElement("div",{id:"child"},React.createElement(
    "div",{id:"child"},
    React.createElement("h1",{},"I'm an h1 tag")
));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render()




// const heading = React.createElement("h1",{
//     id:"heading",
//     xyz: "abc"
// },"Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);