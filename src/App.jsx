import "./App.css";
import profile1Img from "./assets/profile1.png";
import { useState, useEffect } from "react";

import nodejsIcon from "./assets/icons/nodejs.png";
import reactjsIcon from "./assets/icons/reactjs.png";
import viteIcon from "./assets/icons/vite.png";
import mysqlIcon from "./assets/icons/mysql.png";
import dbdiagramIcon from "./assets/icons/dbdiagram.png";
import unrealIcon from "./assets/icons/unreal.png";
import dockerIcon from "./assets/icons/docker.png";
import githubIcon from "./assets/icons/github.png";
import gitlabIcon from "./assets/icons/gitlab.png";
import photopeaIcon from "./assets/icons/photopea.png";
import jiraIcon from "./assets/icons/jira.png";
import jenkinsIcon from "./assets/icons/jenkins.png";
import postmanIcon from "./assets/icons/postman.png";
import tableplusIcon from "./assets/icons/tableplus.png";

import shooterIcon from "./assets/icons/shooter.png";
import topwownRPGIcon from "./assets/icons/topwownRPG.png";
import UE5CIcon from "./assets/icons/UE5C.png";
import ARPGIcon from "./assets/icons/ARPG.png";
import MobileGameIcon from "./assets/icons/MobileGame.png";
import RPGMobileGameIcon from "./assets/icons/RPGMobileGame.png";
import ZbrushIcon from "./assets/icons/Zbrush.png";
import BlenderIcon from "./assets/icons/Blender.png";

const galleryMap = import.meta.glob("./assets/gallery/*.{png,jpg,jpeg,webp,gif}", {
  eager: true,
  as: "url",
});
const galleryImages = Object.entries(galleryMap)
  .sort((a, b) => a[0].localeCompare(b[0])) // stable order by name
  .map(([, url]) => url);

export default function App() {
  const [activePage, setActivePage] = useState(() =>
    (typeof window !== "undefined" && window.location.hash.replace("#", "")) || "home"
  );

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [skipRestoreOnClose, setSkipRestoreOnClose] = useState(false);

  useEffect(() => {
    const applyHash = () => {
      const next = window.location.hash.replace("#", "") || "home";
      setActivePage(next);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Scroll reveal effect
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activePage]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + images.length) % images.length);
    };

    // Lock scroll without shifting layout; keep visual position
    const { body, documentElement } = document;
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollbarW = window.innerWidth - documentElement.clientWidth;
    body.dataset.lockScrollY = String(scrollY);
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      const y = parseInt(body.dataset.lockScrollY || "0", 10);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";
      delete body.dataset.lockScrollY;
      if (!skipRestoreOnClose) window.scrollTo(0, y);
    };
  }, [isLightboxOpen, skipRestoreOnClose]);

  const handleBackToTop = () => {
    if (isLightboxOpen) {
      setSkipRestoreOnClose(true);
      setIsLightboxOpen(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setSkipRestoreOnClose(false), 250);
      }, 30);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
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
              onClick={() => setActivePage("RobloxProject")}>
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
  <div className="container1 page-switch">
    <p className="tag">GAME DESIGN PORTFOLIO</p>
    <h1 className="name reveal-on-scroll">HEI THAVON</h1>
    <h2 className="role reveal-on-scroll">Animator, Game Design, and Backend Developer</h2>

    <p className="lead reveal-on-scroll">
      My name is Hei. I am in Laos, a highly dedicated and self-motivated game player who has had a passion for Game Maker. 
      I born in the cultural countryside, raised in prosperous suburbs, 
      and I have been addicted to playing games since I was a young boy. 
      Games have motivated me to not give up on my life.
    </p>

    <p className="reveal-on-scroll">
     I worked at Vientiane Capital in charge of IT core and digital banking. There are no game and animation studios in my country, 
     anyway my career goal is to be a game developer in a game team somewhere that makes Asian cultural games, 
     challenging myself creatively, and managerially to build strong teams and game projects.
     I have used to build 2D games and 2D animations since I was at university using Adobe Flash and Android Studio. 
     
    </p>

    <p className="reveal-on-scroll">
      This portfolio is a list of games I have done and am in progress of making 
      since I started my solo online learning project in January 2025.
    </p>
  </div>
)}


      {activePage === "SoloProject" && (
        <div className="container4 page-switch">
          <h2 className="reveal-on-scroll">This is TEST1 Page</h2>
          <p className="reveal-on-scroll">Unreal Engine 5 Mobile Game Development introduction to the world of mobile game development using the powerful Unreal Engine 5. 
            This project is designed for my aspiring game developers who passionate about creating mobile games, regardless of prior experience. 
            I am eager to bring my game ideas to life and dive into the mobile gaming industry.</p>
          <div className="video-demo reveal-on-scroll">
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

          <div className="container5 reveal-on-scroll">
            <h3>Game making Step by stem images</h3>
            <div className="mosaic">
              {images.map((src, i) => (
                <figure
                  key={i}
                  className={`tile reveal-on-scroll ${sizes[i] || ""}`}
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

    <div className="project-summary reveal-on-scroll">
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
<div className="learning-assets reveal-on-scroll">
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
<section className="conclusion reveal-on-scroll">
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
        <div className="container4 page-switch">
          <h2 className="reveal-on-scroll">This is RobloxProject Page: For Roblox</h2>
          <p className="reveal-on-scroll">Welcome to this demo section a clean, focused space meant to preview real-world 
            content without the noise. Imagine this block as a hero introduction or product 
            overview. It explains what the experience is, who it benefits, and why it matters. 
            The tone is warm and confident, the pacing calm, and the structure skimmable.
             On desktop or mobile, the copy remains readable at a glance. 
             Paired with a video and gallery, this paragraph sets context, 
             builds trust, and invites visitors to explore the details that follow. 
             Key ideas can be highlighted in short sentences. 
             Start with the problem your audience feels today.</p>
          <div className="video-demo reveal-on-scroll">
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

          <div className="container5 reveal-on-scroll">
            <h3>Extra Container</h3>
            <div className="mosaic">
              {images.map((src, i) => (
                <figure
                  key={i}
                  className={`tile reveal-on-scroll ${sizes[i] || ""}`}
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

    <div className="project-summary reveal-on-scroll">
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
<div className="learning-assets reveal-on-scroll">
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
<section className="conclusion reveal-on-scroll">
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
    <div className="about-me page-switch reveal-on-scroll">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        <div className="about-left">
          <img src={profile1Img} alt="Profile" className="about-img reveal-on-scroll" />
          <p className="about-quote reveal-on-scroll">"Crafting memorable experiences"</p>

          <div className="about-socials reveal-on-scroll">
            <a href="https://youtube.com" target="_blank" rel="noreferrer">📺</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">🌐</a>
          </div>
        </div>

        <div className="about-right">
          <h3 className="hobbies-title reveal-on-scroll">Hobbies</h3>
          <ul className="hobbies-list reveal-on-scroll">
            <li>Talkless, quiet person.</li>
            <li>Addict documentaries, movies, animations, songs, music, tech, sports, and e-sports.</li>
            <li>Watch Gameplay walkthrough: RPG, RTS, Cards, Turn-based, Fighter, MMO, MOBA, and Racing.</li>
            <li>Play recent video games: eFootball, RoV, and Roblox.</li>
            <li>Goal obtain in 3 year: Complete Toefl level testing, 
              Perceive comprehensive Unreal Engine 5-create RPG mobile, 
              multiplayer shooter PC with C++, and build Roblox game with Lua.</li>
            <li>Do road trips and explore nature.</li>
          </ul>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn reveal-on-scroll">
            RESUME
          </a>
        </div>
      </div>
    </div>


      <section className="software reveal-on-scroll">
  <h3 className="software-title">Software Proficiency</h3>
  <div className="software-grid">
    {[
      { src: dbdiagramIcon, alt: "Dbdiagram" },
      { src: mysqlIcon,      alt: "Mysql" },
      { src: tableplusIcon,      alt: "Tableplus" },
      { src: photopeaIcon, alt: "Photopea" },
      { src: nodejsIcon,      alt: "Nodejs" },
      { src: reactjsIcon,      alt: "Reactjs" },
      { src: viteIcon,      alt: "Vite" },
      { src: jiraIcon,      alt: "Jira" },
      { src: unrealIcon, alt: "Unreal Engine" },
      { src: githubIcon,   alt: "Github" },
      { src: gitlabIcon,  alt: "Gitlab" },
      { src: postmanIcon,      alt: "Postman" },
      { src: jenkinsIcon,      alt: "Jenkins" },
      { src: dockerIcon, alt: "Docker" },
      
    ].map((it, i) => (
      <div className="software-item reveal-on-scroll" key={i}>
        <img src={it.src} alt={it.alt} loading="lazy" />
      </div>
    ))}
  </div>
</section>


    <section className="pursuits reveal-on-scroll">
  <h3 className="pursuits-title">Other Pursuits</h3>

  <div className="pursuits-grid">
    {[
            {
        title: "Learn Crimson Ronin",
        href: "https://www.p2design-academy.com/p/crimson-ronin",
        bg: ZbrushIcon,
      },

      {
        title: "Learn Alive! Animation course in Blender",
        href: "https://www.p2design-academy.com/p/alive-animation-course-in-blender",
        bg: BlenderIcon,
      },
            {
        title: "Learn UUnreal Engine 5 Mobile Game Development For Beginners",
        href: "https://www.udemy.com/course/creating-android-games-in-unreal-engine-5-using-blueprint/?couponCode=KEEPLEARNING",
        bg: MobileGameIcon,
      },

      {
        title: "Learn Unreal Engine 5 Create RPG Mobile Game For Play Store",
        href: "https://www.udemy.com/course/unreal-engine-5-create-rpg-mobile-game-for-play-store/?couponCode=KEEPLEARNING",
        bg: RPGMobileGameIcon,
      },

      {
        title: "Learn Unreal Engine 5 creating an ARPG Game from Scratch",
        href: "https://www.udemy.com/course/unreal-engine-5-creating-an-arpg-game-from-scratch/?couponCode=KEEPLEARNING",
        bg: ARPGIcon,
      },

      {
        title: "Learn Engine 5 - Gameplay Ability System - Top Down RPG",
        href: "https://www.udemy.com/course/unreal-engine-5-gas-top-down-rpg/?couponCode=KEEPLEARNING",
        bg: topwownRPGIcon,
      },

      {
        title: "Learn Unreal Engine 5 C++ Multiplayer Shooter",
        href: "https://www.udemy.com/course/unreal-engine-5-cpp-multiplayer-shooter/",
        bg: shooterIcon,
      },

            {
        title: "Learn Unreal Engine 5 C++ The Ultimate Game Developer Course",
        href: "https://www.udemy.com/course/unreal-engine-5-the-ultimate-game-developer-course/?couponCode=KEEPLEARNING",
        bg: UE5CIcon,
      },
     
    ].map((card, i) => (
      <a
        key={i}
        className="pursuit-card reveal-on-scroll"
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
      onClick={handleBackToTop}
    >
      ↑ Top
    </button>
  </div>
</footer>



    </div> 

  );
}
