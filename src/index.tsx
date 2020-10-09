import React from "react";
import ReactDOM from "react-dom";
import styles from "./style/app.scss";
import Photo from "./Photo";

console.log(styles);

ReactDOM.render(
  <div>
    <h1
      className={
        // styles.header
        styles.myHeaderDiv
      }
    >
      Hello world
    </h1>
    ,
    <Photo publicId="balloons" alt="Balloons!" rounded borderRadius="15px" />
  </div>,
  document.getElementById("root")
);
