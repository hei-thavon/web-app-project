import "./App.css";
import profileImg from "./assets/profile.png";
import profile1Img from "./assets/profile1.png";
import { useState, useEffect } from "react";


import unrealIcon from "./assets/icons/unreal.png";
import unityIcon from "./assets/icons/unity.png";
import mayaIcon from "./assets/icons/maya.png";
import photoshopIcon from "./assets/icons/photoshop.png";
import perforceIcon from "./assets/icons/perforce.png";
import jiraIcon from "./assets/icons/jira.png";

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
          <a href="#SoloProject">
            <button
              className={`nav-button ${activePage === "SoloProject" ? "active" : ""}`}
              onClick={() => setActivePage("SoloProject")}>
              Solo Project
            </button>
          </a>
          <a href="#RobloxProject">
            <button
              className={`nav-button ${activePage === "RobloxProject" ? "active" : ""}`}
              onClick={() => setActivePage("RobloxProject")}       >
              Roblox Project
            </button>
          </a>
          <a href="#About">
            <button
              className={`nav-button ${activePage === "About" ? "active" : ""}`}
              onClick={() => setActivePage("About")}>
              About
            </button>
          </a>
        </div>
      </div>


      {activePage === "home" && (
  <div className="container1">
    <p className="tag">GAME DESIGN PORTFOLIO</p>
    <h1 className="name">HEI THAVON</h1>
    <h2 className="role">Animator, Game Design, and Backend Developer</h2>

    <p className="lead">
      My name is Hei. I am in Laos, a highly dedicated and self-motivated game player who has had a passion for Game Maker. 
      I born in the cultural countryside, raised in prosperous suburbs, 
      and I have been addicted to playing games since I was a young boy. 
      Games have motivated me to not give up on my life.
    </p>

    <p>
     I worked at Vientiane Capital in charge of IT core and digital banking. There are no game and animation studios in my country, 
     anyway my career goal is to be a game developer in a game team somewhere that makes Asian cultural games, 
     challenging myself creatively, and managerially to build strong teams and game projects.
     I have used to build 2D games and 2D animations since I was at university using Adobe Flash and Android Studio. 
     
    </p>

    <p>
      This portfolio is a list of games I have done and am in progress of making 
      since I started my solo online learning project in January 2025.
    </p>
  </div>
)}


      {activePage === "SoloProject" && (
        <div className="container4">
          <h2>This is TEST1 Page</h2>
          <p>Unreal Engine 5 Mobile Game Development introduction to the world of mobile game development using the powerful Unreal Engine 5. 
            This project is designed for my aspiring game developers who passionate about creating mobile games, regardless of prior experience. 
            I am eager to bring my game ideas to life and dive into the mobile gaming industry.</p>
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
            <h3>Game making Step by stem images</h3>

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
      <li>Build an RPG game with optimization for mobile platforms. 
        Creating and managing blueprints for game logic, 
        Designing animated characters and environments for mobile games, 
        and Prepare your game for publication on app stores.</li>
    </ul>
    </div>
    <div className="summary-col">
    <h4 className="summary-title">Project Details</h4>
    <ul className="summary-list">
      <li><span className="summary-label">Engine:</span> ENGINE: Unreal Engine 5 </li>
      <li><span className="summary-label">Language:</span> Blueprints </li>
      <li><span className="summary-label">Duration:</span> 16.5 hours to learn, ~3 months to build</li>
      <li><span className="summary-label">Team Size:</span> Solo project</li>
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

        {activePage === "RobloxProject" && (
        <div className="container4">
          <h2>This is RobloxProject Page: For Roblox</h2>
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

  <hr className="la-divider2" />
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


{activePage === "About" && (
  <>
    <div className="about-me">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        <div className="about-left">
          <img src={profile1Img} alt="Profile" className="about-img" />
          <p className="about-quote">"Crafting memorable experiences"</p>

          <div className="about-socials">
            <a href="https://youtube.com" target="_blank" rel="noreferrer">📺</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">🌐</a>
          </div>
        </div>

        <div className="about-right">
          <h3 className="hobbies-title">Hobbies</h3>
          <ul className="hobbies-list">
            <li>Talkless, quiet person.</li>
            <li>Addict documentaries, movies, animations, songs, music, tech, sports, and e-sports.</li>
            <li>Watch Gameplay walkthrough: RPG, RTS, Cards, Turn-based, Fighter, MMO, MOBA, and Racing.</li>
            <li>Play recent video games: eFootball, RoV, and Roblox.</li>
            <li>Goal obtain in 2 year: complete Toefl level testing, learn and make Unreal Engine 5-create RPG mobile game, multiplayer shooter game with C++ and build Roblox game with Lua.</li>
            <li>Do road trips and explore nature.</li>
          </ul>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            RESUME
          </a>
        </div>
      </div>
    </div>

    {/* --- Demo Reel (ONLY on TEST3) --- */}
    <section className="demo-reel">
      <h3 className="demo-title">Demo Reel</h3>
      <div className="demo-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1&playsinline=1"
          title="Demo Reel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>

      <section className="software">
  <h3 className="software-title">Software Proficiency</h3>
  <div className="software-grid">
    {[
      { src: unrealIcon, alt: "Unreal Engine" },
      { src: unityIcon,  alt: "Unity" },
      { src: mayaIcon,   alt: "Maya" },
      { src: photoshopIcon, alt: "Photoshop" },
      { src: perforceIcon,  alt: "Perforce" },
      { src: jiraIcon,      alt: "Jira" },
    ].map((it, i) => (
      <div className="software-item" key={i}>
        <img src={it.src} alt={it.alt} loading="lazy" />
      </div>
    ))}
  </div>
</section>


    <section className="pursuits">
  <h3 className="pursuits-title">Other Pursuits</h3>

  <div className="pursuits-grid">
    {[
      {
        title: "Learn new languages!",
        href: "https://www.duolingo.com/",
        bg: unrealIcon,
      },
      {
        title: "Make YouTube content!",
        href: "https://www.youtube.com/",
        bg: unrealIcon,
      },
      {
        title: "Trophies/achievement hunting!",
        href: "https://www.playstation.com/en-us/playstation-plus/collections/trophy/",
        bg: unrealIcon,
      },
      {
        title: "Travel the world!",
        href: "https://www.lonelyplanet.com/",
        bg: unrealIcon,
      },
    ].map((card, i) => (
      <a
        key={i}
        className="pursuit-card"
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundImage: `url(${card.bg})` }}
      >
        <span className="pursuit-text">{card.title}</span>
      </a>
    ))}
  </div>
</section>
  </>


    
        
)}
{/* --- Footer (sticky) --- */}
<footer className="footer">
  <div className="footer-left">
    <span className="footer-name">Hei Thavon,</span>
    <span className="footer-role"> BE Dev</span>
  </div>

  <div className="footer-center">
    <a href="https://youtube.com" target="_blank" rel="noreferrer">📺</a>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
    <a href="https://artstation.com" target="_blank" rel="noreferrer">🎨</a>
    <a href="https://patreon.com" target="_blank" rel="noreferrer">🧡</a>
  </div>

  <div className="footer-right">
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑ Top
    </button>
  </div>
</footer>



    </div> 

  );
}
