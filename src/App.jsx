import "./App.css";
import profileImg from "./assets/profile.png";
import { useState, useEffect } from "react";

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
            <button className="home" onClick={() => setActivePage("home")}>
              H.T
            </button>
          </a>
          <a href="#test1">
            <button className="button1" onClick={() => setActivePage("test1")}>
              TEST1
            </button>
          </a>
          <a href="#test2">
            <button className="button2" onClick={() => setActivePage("test2")}>
              TEST2
            </button>
          </a>
          <a href="#test3">
            <button className="button3" onClick={() => setActivePage("test3")}>
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
        <h2 style={{ color: "white" }}>This is TEST1 Page</h2>
        <div className="container4">
         <p>This is my container content page 1.</p>
         <div className="video-demo">
          <iframe
          src={`https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1&playsinline=1`}
          title="4K video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          />
         </div>
        </div>
        </>
        )}

      {activePage === "test2" && <h2 style={{ color: "white" }}>This is TEST2 Page</h2>}
      {activePage === "test3" && <h2 style={{ color: "white" }}>This is TEST3 Page</h2>}
    </div>
  );
}
