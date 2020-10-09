import React from "react";
import ReactDOM from "react-dom";

import styles from "./style/app.scss";

console.log(styles);

ReactDOM.render(
  <h1
    className={
      // styles.header
      styles.myHeaderDiv
    }
  >
    Hello world
  </h1>,
  document.getElementById("root")
);
