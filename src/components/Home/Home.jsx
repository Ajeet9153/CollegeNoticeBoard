import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const API_BASE = "http://127.0.0.1:8000";

const navItems = [
  { name: "Notices", path: "/notice" },
  { name: "Students' Grievance", path: "/grievance" },
  { name: "Important Links", path: "/links" },
  { name: "Syllabus", path: "/syllabus" },
  { name: "Library", path: "/library" },
  { name: "Admission", path: "/admission" },
  { name: "Contact Us", path: "/contact" },
  { name: "Academic", path: "/academic" },
  {
    name: "Notification",
    subItems: [
      { name: "SMS", url: "sms:" },
      { name: "Email", url: "mailto:" },
      { name: "WhatsApp", url: "https://wa.me/" },
    ],
  },
];

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/api/notices/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setNotices(data);
        else if (Array.isArray(data.results)) setNotices(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const noticesPerPage = 6;
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const toggleSubMenu = (name) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Navigation</h2>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item.subItems ? (
                <>
                  <span
                    className="sidebar-link"
                    onClick={() => toggleSubMenu(item.name)}
                  >
                    {item.name} {openSubMenu === item.name ? "▲" : "▼"}
                  </span>
                  {openSubMenu === item.name && (
                    <ul className="sub-nav">
                      {item.subItems.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={sub.url}
                            className="sidebar-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} className="sidebar-link">
                  {item.name}
                </Link>
              )}
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
            {Array.from({
              length: Math.max(1, Math.ceil(notices.length / noticesPerPage)),
            }).map((_, i) => (
              <span
                key={i}
                className={`page ${currentPage === i + 1 ? "active" : ""}`}
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
                <button
                  className="read-more"
                  onClick={() => navigate(`/NoticeImagePage/${notice.id}`)}
                >
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
