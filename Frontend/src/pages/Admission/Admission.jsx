import React from "react";
import "./Admission.css";

const admissionInfo = {
  portal: {
    title: "CUSAT Admissions Portal",
    url: "https://admissions.cusat.ac.in/",
  },
  undergrad: {
    title: "Undergraduate (B.Tech / Others)",
    description:
      "CUSAT offers B.Tech and other UG programs. Eligibility: 10+2 in PCM subjects, with required percentages. Lateral entry via Diploma also available.",
    url: "https://admissions.cusat.ac.in/?tag=ug_course",
  },
  postgrad: {
    title: "Postgraduate (MCA, M.Sc, M.Tech etc.)",
    description:
      "PG admissions include MCA, M.Sc, M.Tech etc. Eligibility criteria vary per program (often bachelor’s degree with requisite percentage).",
    url: "https://admissions.cusat.ac.in/",
  },
  phd: {
    title: "PhD / Research",
    description:
      "Candidates for PhD should hold a Master’s degree with at least 55%. Relaxation for SC/ST is applicable.",
    url: "https://soe.cusat.ac.in/phdadmission.php",
  },
  international: {
    title: "International / Supernumerary Seats",
    description:
      "15% of seats are reserved as supernumerary for international candidates in UG/PG programs.",
    url: "https://oir.cusat.ac.in/admissions.php",
  },
  fees: {
    title: "Fee Structure & Ranges",
    description:
      "Course fees vary by program. E.g., UG & PG ranges, semester and annual fees. (Indicative only).",
    url: "https://admissions.cusat.ac.in/files/1649321529.pdf",
  },
  eligibility: {
    title: "Eligibility & Lateral Entry",
    description:
      "Eligibility criteria: 10+2, minimum marks, diploma holders may join lateral entry courses.",
    url: "https://admissions.cusat.ac.in/?tag=ug_course",
  },
};

const Admission = () => {
  return (
    <div className="admission-container">
      <h1>Admission at CUSAT</h1>
      <p className="intro">
        Find all information on admission processes, eligibility criteria, course fees, important links, and more.
      </p>

      <ul className="admission-list">
        {Object.keys(admissionInfo).map((key) => {
          const item = admissionInfo[key];
          return (
            <li key={key} className="admission-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <h3>{item.title}</h3>
              </a>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Admission;