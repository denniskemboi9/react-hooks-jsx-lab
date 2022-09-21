import React from "react";
import image from "./data/data.js";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p>I am cruising through the content!</p>
    <img src= {image} alt= "I made this"></img>
  </div>;
}

export default About;
