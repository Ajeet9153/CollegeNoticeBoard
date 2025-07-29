import React, { useState } from 'react';
import './Home.css';

const initialNotices = [
  { title: "Semester Exam Results Published", date: "2025-07-28" },
  { title: "Admission Open for 2025", date: "2025-07-15" },
  {description: "Detailed schedule and instructions for the Physical Education practical exams..."
  },
  // ... existing notices
];
const notices = [
  ...initialNotices,
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
  { title: "New Library Timings", date: "2025-07-20" },
  { title: "Sports Day Scheduled", date: "2025-07-22" },
  { title: "Guest Lecture on AI", date: "2025-07-25" },
  { title: "Campus Cleanliness Drive", date: "2025-07-27" },
  { title: "Cultural Fest Announced", date: "2025-07-30" },
];

const navItems = [
  "Notices", 
  "Students' Grievance",  
  "Important Links","Syllabus", "Contact Us"
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

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
            Pages: 
            <span 
              className={`page ${currentPage === 1 ? 'active' : ''}`} 
              onClick={() => setCurrentPage(1)}
            >
              1
            </span>
            <span 
              className={`page ${currentPage === 2 ? 'active' : ''}`} 
              onClick={() => setCurrentPage(2)}
            >
              2
            </span>
            <span 
              className={`page ${currentPage === 3 ? 'active' : ''}`} 
              onClick={() => setCurrentPage(3)}
            >
              3
            </span>
            <span 
              className="page" 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(notices.length / noticesPerPage)))}
            >
              »
            </span>
            
          </div>
        </div>

        {currentNotices.map((notice, index) => (
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
