import React from "react";
import "./Syllabus.css";

const Syllabus = () => {
  const syllabusData = [
    {
      title: "B.Tech Computer Science and Engineering",
      desc: "Includes core subjects like Data Structures, Operating Systems, AI, and Machine Learning.",
      link: "https://soe.cusat.ac.in/soe_academic_resource.php?p=btsyl",
    },
    {
      title: "M.Tech Information Technology",
      desc: "Focuses on Database Systems, Networking, Cloud Computing, and Web Technologies.",
      link: "https://soe.cusat.ac.in/course_mtech.php",
    },
    {
      title: "Intigrated Master of Computer Application",
      desc: "Covers Software Engineering, Python, Machine Learning, and Full Stack Development. ",
      link: "https://dca.cusat.ac.in/assets/syllabus/IntMCA2025Syllabus.pdf",
    },
    {
      title: "MCA (Master of Computer Applications)",
      desc: "Covers Software Engineering, Python, Machine Learning, and Full Stack Development.",
      link: "https://dca.cusat.ac.in/assets/syllabus/MCA2020Syllabus.pdf",
    },
    {
      title: "MBA (Master of Business Administration)",
      desc: "Includes Business Analytics, Marketing, Financial Management, and HR strategies.",
      link: "https://cusat.ac.in/naac/criteria1/1.1.2/syl/syllabus90.pdf",
    },
    {
      title: "B.Sc Physics",
      desc: "Topics include Quantum Mechanics, Thermodynamics, and Computational Physics.",
      link: "https://www.kswu.ac.in/Uploads/Syllabus/UG/Science/physics-syllabus-2012_1.pdf",
    },
  ];

  return (
    <div className="syllabus-container">
      <h1>Syllabus</h1>
      <p className="intro">
        Access and download the latest course syllabi from Cochin University of
        Science and Technology (CUSAT). Select your program below to view the
        syllabus details.
      </p>

      <div className="syllabus-grid">
        {syllabusData.map((item, index) => (
          <div key={index} className="syllabus-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              📘 View / Download
            </a>
          </div>
        ))}
      </div>

      <div className="note">
        <strong>Note:</strong> All syllabi are officially published by CUSAT and
        updated regularly. Students are advised to check the official CUSAT
        website for any revisions or newly added programs.
      </div>
    </div>
  );
};

export default Syllabus;