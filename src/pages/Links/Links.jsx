import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="page-container">
      <h2>Important Links</h2>
      <ul className="links-list">
        <li><a href="https://www.cusat.ac.in" target="_blank">CUSAT Official Website</a></li>
        <li><a href="https://www.cusat.ac.in/library" target="_blank">Library Portal</a></li>
        <li><a href="https://www.cusat.ac.in/admission" target="_blank">Admission Portal</a></li>
      </ul>
    </div>
  );
};

export default Links;