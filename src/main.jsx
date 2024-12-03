import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <img src="src/assets/react_logo.png" alt="" />
    <h1>Hello there</h1>
  </div>
)