import React from "react";
import { hydrate, render } from "react-dom";

import App from "./App";

console.log = () => {};
console.warn = () => {};
console.debug = () => {};

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
