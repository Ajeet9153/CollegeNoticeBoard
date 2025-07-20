// components/Home.jsx
import React, { useState } from 'react';
import './Home.css';

const notices = [
  {
    title: "Physical Education Practical Examination Schedule",
    date: "Thursday, 17th July 2025"
  },
  {
    title: "Dept. of Zoology Practical exam schedule for Sem 2nd & 4th",
    date: "Tuesday, 15th July 2025"
  },
  {
    title: "Dept. of Statistics Practical Exam Schedule",
    date: "Tuesday, 15th July 2025"
  },
  {
    title: "Economics SEC practical for 2nd Sem",
    date: "Tuesday, 15th July 2025"
  }
];

const navItems = [
 "Online Classes", "Study Materials",
  "Students' Grievance", "Events", "Notice", "Our Glimpses",
  "Important Links","Syllabus", "Contact Us"
];

const Home = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Navigation</h2>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={item === "Notice Board" ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Notice Area */}
      <main className="notice-section">
        <div className="notice-header">
          <h1>Notice Board</h1>
          <div className="pagination">
            Pages: <span className="page active">1</span>
            <span className="page">2</span>
            <span className="page">3</span>
            <span className="page">{`»`}</span>
          </div>
        </div>

        {notices.map((notice, index) => (
          <div className="notice-card" key={index}>
            <div className="notice-title">{notice.title}</div>
            <div className="notice-tag">Notice</div>
            <div className="notice-footer">
              <button className="read-more">
                Read More <span className="arrow">➡️</span>
              </button>
              <div className="posted-date">
                Posted on : {notice.date}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;