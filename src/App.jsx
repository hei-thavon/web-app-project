import "./App.css";
import profileImg from "./assets/profile.png";
import { useState, useEffect } from "react";

const galleryMap = import.meta.glob("./assets/gallery/*.{png,jpg,jpeg,webp,gif}", {
  eager: true,
  as: "url",
});
const galleryImages = Object.entries(galleryMap)
  .sort((a, b) => a[0].localeCompare(b[0])) // stable order by name
  .map(([, url]) => url);

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const applyHash = () =>
      setActivePage(window.location.hash.replace("#", "") || "home");
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isLightboxOpen]);
  const sizes = ["w2 h2", "h2", "w2", "", "w2", "", "", ""];
  const images = galleryImages.slice(0, 8);

  return (
    <div className="menu">
      <div className="topbar">
        <div className="topbar-center">
          <a href="#home">
            <button
              className={`nav-button ${activePage === "home" ? "active" : ""}`}
              onClick={() => setActivePage("home")}>
              H.T
            </button>
          </a>
          <a href="#test1">
            <button
              className={`nav-button ${activePage === "test1" ? "active" : ""}`}
              onClick={() => setActivePage("test1")}>
              TEST1
            </button>
          </a>
          <a href="#test2">
            <button
              className={`nav-button ${activePage === "test2" ? "active" : ""}`}
              onClick={() => setActivePage("test2")}       >
              TEST2
            </button>
          </a>
          <a href="#test3">
            <button
              className={`nav-button ${activePage === "test3" ? "active" : ""}`}
              onClick={() => setActivePage("test3")}>
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
        <div className="container4">
          <h2>This is TEST1 Page</h2>
          <p>Welcome to this demo section a clean, focused space meant to preview real-world 
            content without the noise. Imagine this block as a hero introduction or product 
            overview. It explains what the experience is, who it benefits, and why it matters. 
            The tone is warm and confident, the pacing calm, and the structure skimmable.
             On desktop or mobile, the copy remains readable at a glance. 
             Paired with a video and gallery, this paragraph sets context, 
             builds trust, and invites visitors to explore the details that follow. 
             Key ideas can be highlighted in short sentences. 
             Start with the problem your audience feels today.</p>
          <div className="video-demo">
            <iframe
              src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1&playsinline=1"
              title="4K video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen/>
            <a
              href="https://drive.google.com/your-google-drive-link-here"
              target="_blank"
              rel="noopener noreferrer"
              className="drive-button">
              📂 Open Google Drive
            </a>
          </div>

          <div className="container5">
            <h3>Extra Container</h3>

            <div className="mosaic">
              {images.map((src, i) => (
                <figure
                  key={i}
                  className={`tile ${sizes[i] || ""}`}
                  onClick={() => { setLightboxIndex(i); setIsLightboxOpen(true); }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setLightboxIndex(i);
                      setIsLightboxOpen(true);
                    }
                  }}>
                  <img src={src} alt={`pic${i + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>

          {isLightboxOpen && (
            <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
              <button
                className="lightbox-close-x"
                aria-label="Close"
                onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
              />
              <img
                className="lightbox-img"
                src={images[lightboxIndex]}
                alt={`full-pic-${lightboxIndex + 1}`}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

    <div className="project-summary">
    <div className="summary-col">
    <h4 className="summary-title">Goal:</h4>
    <ul className="summary-list">
      <li>Build an AWS EC2, DigitalOcean, Vercel, Netlify optimized for web platforms.</li>
      <li>Create and manage Jenkins for core server logic.</li>
      <li>Design automate Jenkins CD, GitLab CI, GitHub Actions, Terraform, Ansible and Docker-friendly environments.</li>
      <li>Dev API Development: REST, GraphQL, gRPC</li>
      <li>Manage Databases:SQL (PostgreSQL, MySQL, MongoDB)</li>
      <li>Practice: Authentication & Authorization: JWT, OAuth2, OpenID Connect, Session & Cookie auth.</li>
    </ul>
    </div>
    <div className="summary-col">
    <h4 className="summary-title">Project Details</h4>
    <ul className="summary-list">
      <li><span className="summary-label">Software:</span> AWS EC2 5</li>
      <li><span className="summary-label">Language:</span> JavaScript/TypeScript (Node.js), Go..? </li>
      <li><span className="summary-label">Duration:</span> 16.5 hours to learn, ~3 months to build</li>
      <li><span className="summary-label">Team Size:</span> with iQURi Team</li>
     </ul>
     </div>
    </div>

{/* --- Learning / Assets Used panel --- */}
<div className="learning-assets">
  <div className="la-col">
    <h4 className="la-title">Learning:</h4>
    <ol className="la-list numbered">
      <li>Understanding the basics of Unreal Engine 5.</li>
      <li>Mobile Game Development Fundamentals.</li>
      <li>Implementing gameplay mechanics with Blueprints Visual Scripting.</li>
      <li>Character and Environment Design.</li>
      <li>UI/UX Design for Mobile Games.</li>
    </ol>
  </div>

  <div className="la-col">
    <h4 className="la-title">Assets Used:</h4>
    <ul className="la-list bulleted">
      <li>Avatar character (Art)</li>
      <li>Farm field with house, and shop (Art)</li>
      <li>Good Sky (Art)</li>
    </ul>
  </div>

  <hr className="la-divider" />
</div>

{/* --- Conclusion panel --- */}
<section className="conclusion">
  <h4 className="conclusion-title">Conclusion</h4>
  <div className="conclusion-body">
    <p>
      Although this RPG-inspired level is still a work in progress, the
      development journey so far has been both challenging and deeply rewarding.
      Tackling multiplayer implementation and symmetrical character design
      under tight time constraints has pushed me to think creatively and
      problem-solve in real time skills that are critical in game development.
    </p>

    <p>
      This project has expanded my understanding of Unreal Engine Blueprint
      scripting and character design, areas I had not previously explored in
      such depth. It has also strengthened my ability to research solutions,
      maintain a clear creative vision even when facing technical limitations,
      and adapt quickly qualities essential to any game development pipeline.
    </p>

    <p>
      While the level is not yet complete, the progress made reflects both my
      commitment to quality and my eagerness to learn and grow. I’m excited to
      continue building on this foundation and to apply the insights I’ve
      gained to future projects and opportunities in game development.
    </p>
  </div>
</section>


        </div>
      )}
    </div>
  );
}
