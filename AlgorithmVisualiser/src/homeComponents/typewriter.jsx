import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./style.css";
class TypeWriterC extends Component {
  state = {};
  render() {
    return (
      <div className="type">
        <span className="size">
          <Typewriter
            options={{
              strings: ["Graph Algorithms", "Sorting Algorithms", "8 Queen"],
              autoStart: true,
              loop: true,
              pauseFor:1500,
              delay: 'natural',
              deleteSpeed: 'natural',
              cursorClassName: 'cursorSize',
              wrapperClassName: 'textSize',
            }}
          />
        </span>
      </div>
    );
  }
}

export default TypeWriterC;
