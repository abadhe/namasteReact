import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1>
    Title React Object
  </h1>
);

const RenderTitles = () => {
  const numberOfTitles = 10; // Change this to the desired number of titles
  const titlesArray = [];

  for (let i = 0; i < numberOfTitles; i++) {
    titlesArray.push(
      <div key={i}>{title}</div>
    );
    // <div key={i}>{title}</div>
  }

  return titlesArray;
};

const HeadingComponent = () => (
  <div>
    <RenderTitles/>
    <h2>
      My heading component
    </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
