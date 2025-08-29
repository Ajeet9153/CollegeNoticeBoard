
import React, { useState, useEffect } from 'react';
import './Home.css';

const API_BASE = "http://127.0.0.1:8000"; // Django backend URL

const navItems = [
  "Notices",
  "Students' Grievance",
  "Important Links", "Syllabus", "Contact Us"
];

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${API_BASE}/api/notices/`)            // <-- updated endpoint
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        console.log("API Response (notices):", data);
        if (Array.isArray(data)) {
          setNotices(data);
        } else if (Array.isArray(data.results)) {
          // in case a paginated response is returned
          setNotices(data.results);
        } else {
          console.error("Unexpected API format:", data);
        }
      })
      .catch(err => console.error("Error fetching notices:", err));
  }, []);

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
            <li key={index} className={item === "Notice Board" ? "active" : ""}>
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
            {Array.from({ length: Math.max(1, Math.ceil(notices.length / noticesPerPage)) }, (_, i) => (
              <span
                key={i}
                className={`page ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>

        {currentNotices.length === 0 ? (
          <p>No notices available</p>
        ) : (
          currentNotices.map((notice) => (
            <div className="notice-card" key={notice.id}>
              <div className="notice-title">{notice.title}</div>
              <div className="notice-tag">Notice</div>
              <div className="notice-body">{notice.message}</div>
              <div className="notice-footer">
                <button className="read-more">
                  Read More <span className="arrow">➡️</span>
                </button>
                <div className="posted-date">
                  Posted on : {new Date(notice.created_at).toLocaleString()}
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
