import "./App.css";
import profileImg from "./assets/profile.png";
import { useState, useEffect } from "react";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  // When user opens /#test1 etc., set the state from the hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActivePage(hash);
    }

    // Listen for manual hash changes (e.g., back/forward buttons)
    const onHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      setActivePage(newHash || "home");
    };
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="menu">
      {/* Buttons */}
      <div className="container0">
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

      {/* Conditional content */}
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
        <h2 style={{ color: "white" }}>This is TEST1 Page</h2>
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
