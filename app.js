import React from "react";
import ReactDOM from "react-dom/client";

const heading  = React.createElement("h1", {id: "heading"}, "This is react heading");

const jsxheading = <h1 id = "heading">This is jsx heading</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);