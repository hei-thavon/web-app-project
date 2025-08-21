import "./App.css";
import profileImg from "./assets/profile.png";
import { useState, useEffect } from "react";

// ✅ Auto‑import all images from /src/assets/gallery (png/jpg/webp/gif)
const galleryImages = Object.values(
  import.meta.glob("./assets/gallery/*.{png,jpg,jpeg,webp,gif}", {
    eager: true,
    as: "url",
  })
);

export default function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const applyHash = () =>
      setActivePage(window.location.hash.replace("#", "") || "home");
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <div className="menu">
      <div className="topbar">
        <div className="topbar-center">
          <a href="#home">
            <button
              className={`nav-button ${activePage === "home" ? "active" : ""}`}
              onClick={() => setActivePage("home")}
            >
              H.T
            </button>
          </a>
          <a href="#test1">
            <button
              className={`nav-button ${activePage === "test1" ? "active" : ""}`}
              onClick={() => setActivePage("test1")}
            >
              TEST1
            </button>
          </a>
          <a href="#test2">
            <button
              className={`nav-button ${activePage === "test2" ? "active" : ""}`}
              onClick={() => setActivePage("test2")}
            >
              TEST2
            </button>
          </a>
          <a href="#test3">
            <button
              className={`nav-button ${activePage === "test3" ? "active" : ""}`}
              onClick={() => setActivePage("test3")}
            >
              TEST3
            </button>
          </a>
        </div>
      </div>

      {activePage === "home" && (
        <>
          <div className="container1">
            <p>This is my container content 1.</p>
            <p>This is my container content 2.</p>
            <p>This is my container content 3.</p>
          </div>

          <div className="container2">
            <img src={profileImg} alt="Profile" className="profile-image" />
          </div>

          <div className="container3">
            <p>This is my container content 1.</p>
            <p>This is my container content 2.</p>
            <p>This is my container content 3.</p>
          </div>
        </>
      )}

      {activePage === "test1" && (
        <>
          <div className="container4">
            <h2>This is TEST1 Page</h2>
            <p>
              This is my container content page 1, This is my container content
              page 1, This is my container content page 1, This is my container
              content page 1, This is my container content page 1, This is my
              container content page 1, This is my container content page 1,
              This is my container content page 1, This is my container content
              page 1, This is my container content page 1.
            </p>

            {/* Video + button */}
            <div className="video-demo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1&playsinline=1"
                title="4K video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <a
                href="https://drive.google.com/your-google-drive-link-here"
                target="_blank"
                rel="noopener noreferrer"
                className="drive-button"
              >
                📂 Open Google Drive
              </a>
            </div>

            {/* Gallery inside its own container under the button */}
            <div className="gallery-container">
              <div className="gallery">
                {galleryImages.map((src, i) => (
                  <img key={i} src={src} alt={`gallery-${i}`} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {activePage === "test2" && (
        <h2 style={{ color: "white" }}>This is TEST2 Page</h2>
      )}
      {activePage === "test3" && (
        <h2 style={{ color: "white" }}>This is TEST3 Page</h2>
      )}
    </div>
  );
}
