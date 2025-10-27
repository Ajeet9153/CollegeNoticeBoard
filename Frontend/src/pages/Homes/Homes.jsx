import React, { useEffect, useState } from "react";
import "./Homes.css";

const Home = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/notices/") // Your Django API
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.error("Error fetching notices:", err));
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to CUSAT</h1>
      <h2>Notices:</h2>
      <ul>
        {notices.length > 0 ? (
          notices.map((notice) => <li key={notice.id}>{notice.title}</li>)
        ) : (
          <li>No notices available.</li>
        )}
      </ul>
    </div>
  );
};

export default Home;