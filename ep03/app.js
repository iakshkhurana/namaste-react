// instead of cdn we imported libraries
import React from "react";
import ReactDOM from "react-dom";

// // React Element => object => render then it becomes an HTML element

// const heading = React.createElement("h1",{id:"heading"},"Namaste React");
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);

// // root me jo hai woh replace hoga heading se

// // JSX (transpiled before it reaches the JS Engine) - Parcel - Babel
// // Babel JSX code uthata hai aur machine ko samajhne wale code me convert karta hai (jsx to createElement to render)

// const jsxheading = <h1 id="heading" className="head" tabIndex={1}>Namaste React using JSX</h1>
// console.log(jsxheading);

// React element
const heading = (
    <h1 className="head" tabIndex = "5">
        Namaste React using JSX
    </h1>
);

// React component
// Class based components - OLD
// Functional based components - NEW
const headingComponent = () =>{
    return <h1>Namaste React</h1>
}




// 2 elements
// const Title = () =>{
//     return <h1>Heading</h1>
// }
// // Component composition
// const Paragraph = () =>{
//     <div id="container">
//         <Title/>
//         <h2>Title ka content</h2>
//     </div>
// }

const elem = <>Aksh</>

const root = ReactDOM.createRoot(document.getElementById("root"));

const final = () =>{
    return <>
        {elem}
    </>
};

// root.render(jsxheading);
// root.render(<Paragraph/>);
root.render(<final/>);