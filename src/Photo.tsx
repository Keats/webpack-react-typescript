import * as React from "react";
import { getSrc, getSrcSet } from "./utils";
// import { customMedia } from "./global.css";
import styles from "./Photo.scss";
// import "./Photo1.scss";
// const styles = require("./Photo.scss");
// const photo1Styles = require("Photo1.module.scss");
// const { customMedia } = require("./global.css");

console.log(styles);
export interface PhotoProps {
  publicId: any;
  alt: any;
  rounded: any;
  borderRadius: any;
}

const Photo = ({ publicId, alt, rounded, borderRadius }: PhotoProps) => (
  <div className={styles["photo-div"]}>
    <figure>
      <img
        className={rounded ? styles.roundedPhoto : styles.photo}
        style={
          typeof borderRadius !== "undefined"
            ? ({
                // ["--border-radius"]: borderRadius,
                borderRadius: borderRadius
              } as React.CSSProperties)
            : ((null as unknown) as React.CSSProperties)
        }
        src={getSrc({
          publicId,
          width: 200
        })}
        srcSet={getSrcSet({
          publicId,
          widths: [200, 400, 800]
        })}
        // sizes={`${customMedia["--photo-breakpoint"]} 400px, 200px`}
        sizes="(min-width: 30rem) 400px, 200px"
      />{" "}
      <figcaption className={styles.caption}> {alt} </figcaption>
      {"Here is your cusotoms media data:" +
        // + `${customMedia["--photo-breakpoint"]}`
        "Here is your styles data:" +
        `${styles["photo-div"]}` +
        "Here is borderRadius" +
        `${borderRadius}`}
    </figure>
  </div>
);

Photo.defaultProps = {
  rounded: false,
  borderRadius: 1
};

export default Photo;
