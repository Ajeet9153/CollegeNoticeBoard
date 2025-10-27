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
  const externalLink = notice.link || notice.external_link || null;
  const isPDF = attachmentUrl?.toLowerCase().endsWith(".pdf");

  // ✅ Sharing Links
  const pageUrl = window.location.href;
  const shareMessage = `📢 *${notice.title}*\n\n${notice.message}\n\nCheck details here: ${pageUrl}`;
  const encodedMessage = encodeURIComponent(shareMessage);

  const emailSubject = encodeURIComponent(`Notice: ${notice.title}`);
  const emailBody = encodeURIComponent(`${notice.message}\n\nView Notice: ${pageUrl}`);

  const emailLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
  const smsLink = `sms:?body=${encodedMessage}`;

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          maxWidth: "100px",
          marginBottom: "2rem",
          padding: "0.5rem 1rem",
          border: "none",
          backgroundColor: "#a60202",
          color: "white",
          borderRadius: "80px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* Title & Message */}
      <h1 style={{ marginBottom: "0.5rem" }}>{notice.title}</h1>
      <p style={{ color: "#444", lineHeight: "1.6" }}>{notice.message}</p>

      {/* Attachment Display */}
      {attachmentUrl && (
        <>
          {isPDF ? (
            <>
              {/* PDF Preview */}
              <iframe
                src={attachmentUrl}
                width="100%"
                height="600px"
                title="PDF Attachment"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
              />
              {/* PDF Download/View Link */}
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <a
                  href={attachmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    border: "1px solid #007bff",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    transition: "0.3s",
                  }}
                >
                  🔗 View / Download PDF
                </a>
              </div>
            </>
          ) : (
            <>
              {/* Image Preview */}
              <div
                style={{
                  
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={attachmentUrl}
                  alt={notice.title}
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                    display: "block",
                    borderRadius: "8px",
                    objectFit: "contain",
                  }}
                  onError={(e) => (e.target.src = "/placeholder.png")}
                />
              </div>

              {/* Image Download/View Link */}
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <a
                  href={attachmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    border: "1px solid #007bff",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    transition: "0.3s",
                  }}
                >
                  🔗 View / Download Image
                </a>
              </div>
            </>
          )}
        </>
      )}

      {/* ✅ External Link */}
      {externalLink && (
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              color: "#28a745",
              textDecoration: "none",
              fontWeight: "bold",
              border: "1px solid #28a745",
              padding: "0.6rem 1.3rem",
              borderRadius: "20px",
              transition: "0.3s",
            }}
          >
            🌐 Visit Related Link
          </a>
        </div>
      )}

      {/* ✅ Share Section */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3 style={{ marginBottom: "0.8rem" }}>📤 Share This Notice</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a
            href={emailLink}
            style={{
              backgroundColor: "#d93025",
              color: "white",
              textDecoration: "none",
              padding: "0.6rem 1rem",
              borderRadius: "15px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            ✉️ Email
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              textDecoration: "none",
              padding: "0.6rem 1rem",
              borderRadius: "15px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            💬 WhatsApp
          </a>

          <a
            href={smsLink}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              textDecoration: "none",
              padding: "0.6rem 1rem",
              borderRadius: "15px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            📱 SMS
          </a>
        </div>
      </div>

      {/* Posted Date */}
      <p style={{ marginTop: "2rem", marginBottom: "5rem", color: "#433939ff" }}>
        Posted on: {new Date(notice.created_at).toLocaleString()}
      </p>
    </div>
  );
};

export default NoticeImagePage;
