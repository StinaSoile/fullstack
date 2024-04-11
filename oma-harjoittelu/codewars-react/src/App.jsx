import { useState } from "react";
import React from "react";
import "./App.css";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  function createElement(content, tag = "div", props = {}) {
    return React.createElement(tag, props, content);
  }

  function createUnorderedList(list) {
    return React.createElement(
      "ul",
      {},
      list.map((element, i) => {
        i++;
        return React.createElement("li", { key: i }, element);
      })
    );
  }

  function isIsogram(string) {
    const str = string.toLowerCase();
    if (str.length < 2) return true;
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str.charAt(i)] === 1) return false;
      else {
        obj[str.charAt(i)] = 1;
      }
    }
    return true;
  }

  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("moose"));
  console.log(isIsogram("aba"));

  return (
    <>
      {createElement("hello wordlr")}
      {createUnorderedList(["sdf", "sdf", "safa"])}
    </>
  );
}

export default App;
