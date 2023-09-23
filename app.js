import React from "react";
import ReactDOM from "react-dom/client";

const heading  = React.createElement("h1", {id: "heading"}, "This is react heading");

const jsxheading = <h1 id = "heading">This is jsx heading</h1>;

// const TitleComponent = () => (
//     <h1>
//         My title Component
//     </h1>
// )
const title = (
    <h1>
        Title React Object
    </h1>
)

const HeadingComponent = () => (
    <div>
        {/* <TitleComponent></TitleComponent> */}
        {title}
        <h2>
            My heading component
        </h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);