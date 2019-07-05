import { h, render, Component } from "preact";
import "./style.css";

import builtIn from "icons95";
class Icon extends Component {
  getUrl(size, name) {
    if (builtIn[size] && builtIn[size][name])
      return "data:image/gif;base64," + builtIn[size][name];
    return `/icons/${size}/${name}.gif`;
  }
  getSize(size) {
    if (size === "custom") return undefined;
    return size;
  }
  render({ name = "default", size = 16, classNames }) {
    const className = [
      "ui95-icon",
      name,
      size,
      (classNames || "").split(" ")
    ].join(" ui95-icon--");
    return h("img", {
      className,
      width: this.getSize(size),
      height: this.getSize(size),
      src: this.getUrl(size, name)
    });
  }
}

export default Icon;
