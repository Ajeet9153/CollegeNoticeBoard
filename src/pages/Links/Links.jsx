import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="page-container">
      <h2>Important Links</h2>
      <ul className="links-list">
        <li>
          <a href="https://www.cusat.ac.in" target="_blank" rel="noopener noreferrer">
            CUSAT Official Website
          </a>
        </li>
        <li>
          <a href="https://www.cusat.ac.in/library" target="_blank" rel="noopener noreferrer">
            University Library
          </a>
        </li>
        <li>
          <a href="https://admissions.cusat.ac.in" target="_blank" rel="noopener noreferrer">
            Admission Portal
          </a>
        </li>
        <li>
          <a href="https://finance.cusat.ac.in" target="_blank" rel="noopener noreferrer">
            Finance Section
          </a>
        </li>
        <li>
          <a href="https://cusat.ac.in/student" target="_blank" rel="noopener noreferrer">
            Student Portal
          </a>
        </li>
        <li>
          <a href="https://cusat.ac.in/news" target="_blank" rel="noopener noreferrer">
            University News
          </a>
        </li>
        <li>
          <a href="https://dyuthi.cusat.ac.in" target="_blank" rel="noopener noreferrer">
            Dyuthi (Institutional Repository)
          </a>
        </li>
        <li>
          <a href="https://www.cusat.ac.in/contact" target="_blank" rel="noopener noreferrer">
            Contact Information
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;