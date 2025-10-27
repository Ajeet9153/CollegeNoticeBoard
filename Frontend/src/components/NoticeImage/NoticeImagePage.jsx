import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000";

const NoticeImagePage = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/api/notices/${id}/`)
      .then((res) => res.json())
      .then((data) => setNotice(data))
      .catch((err) => console.error("Error fetching notice:", err));
  }, [id]);

  if (!notice) return <p>Loading...</p>;

  const attachmentUrl = notice.attachment || null;
  const isPDF = attachmentUrl?.endsWith(".pdf");

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
        ← Back
      </button>

      <h1>{notice.title}</h1>
      <p>{notice.message}</p>

      {attachmentUrl && (
        <>
          {isPDF ? (
            <iframe
              src={attachmentUrl}
              width="100%"
              height="600px"
              title="PDF Attachment"
              style={{ border: "1px solid #ccc", borderRadius: "8px", marginTop: "1rem" }}
            />
          ) : (
            <div className="pdf-container">
        <img
        
          src={attachmentUrl}
          alt={notice.title}
          style={{ width: "100%", display: "block", height: "100%", objectFit: "contain" }}
          onError={(e) => (e.target.src = "/placeholder.png")}
        />
        
      </div>
          )}
        </>
      )}

      <p style={{ marginTop: "1rem", color: "#555" }}>
        Posted on: {new Date(notice.created_at).toLocaleString()}
      </p>
    </div>
  );
};

export default NoticeImagePage;
