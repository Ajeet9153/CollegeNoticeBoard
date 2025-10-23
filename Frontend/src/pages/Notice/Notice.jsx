// NoticePage.jsx
import React from "react";
import "./Notice.css";

const notices = [
  {
    title: "Semester Exam Schedule Released",
    date: "October 10, 2025",
    description: "The detailed timetable for the upcoming semester exams has been released. Students are advised to check their respective department notices.",
    link: "https://www.cusat.ac.in/exam-schedule"
  },
  {
    title: "Library Closed for Maintenance",
    date: "October 12, 2025",
    description: "The university library will be closed on 15th October for scheduled maintenance.",
    link: "https://www.cusat.ac.in/library"
  },
  {
    title: "Guest Lecture on AI and ML",
    date: "October 15, 2025",
    description: "A guest lecture on Artificial Intelligence and Machine Learning will be held in the main auditorium. All students are encouraged to attend.",
    link: "https://www.cusat.ac.in/events"
  },
  {
    title: "Fee Payment Deadline Extended",
    date: "October 13, 2025",
    description: "The deadline for semester fee payment has been extended to 20th October 2025. Please pay your fees before the new deadline to avoid penalties.",
    link: "https://finance.cusat.ac.in"
  }
];

const NoticePage = () => {
  return (
    <div className="notice-container">
      <h2>University Notices</h2>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <li key={index} className="notice-item">
            <h3>{notice.title}</h3>
            <div className="notice-date">{notice.date}</div>
            <p>{notice.description}</p>
            <a href={notice.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticePage;