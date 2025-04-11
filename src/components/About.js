import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Are you a software engineer because you can code or can you code because you are a software engineer.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
