import React from "react";
import "./Grievance.css";

const grievanceLinks = [
  {
    title: "CUSAT Grievance Redressal Portal",
    description:
      "Submit academic, administrative, or personal grievances online. Handled confidentially by the university committee.",
    url: "https://cusat.ac.in/student/grievances",
  },
  {
    title: "Anti-Ragging Cell",
    description:
      "Report any ragging incidents or related complaints. Protects student welfare and campus safety.",
    url: "https://www.cusat.ac.in/student/antiragging.php",
  },
  {
    title: "Internal Complaints Committee (ICC)",
    description:
      "Handles cases of sexual harassment and gender discrimination at the workplace or campus.",
    url: "https://www.cusat.ac.in/gender.php",
  },
  {
    title: "IQAC – Student Feedback Portal",
    description:
      "Provide feedback and suggestions to improve academic quality and student services.",
    url: "https://iqac.cusat.ac.in/",
  },
];

const Grievance = () => {
  return (
    <div className="grievance-container">
      <h1>Students' Grievance & Feedback</h1>
      <p className="intro">
        CUSAT is committed to maintaining transparency and fairness. Students can submit grievances or feedback using the following official links.
      </p>

      <div className="grievance-links">
        {grievanceLinks.map((item, index) => (
          <div key={index} className="grievance-card">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h3>{item.title}</h3>
            </a>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="note">
        <p>
          ⚠️ <strong>Note:</strong> All complaints are handled confidentially by
          the respective grievance redressal committees of CUSAT.
        </p>
      </div>
    </div>
  );
};

export default Grievance;