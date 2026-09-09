import { useState } from "react";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import IntroModal from "./components/IntroModal";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleCloseIntro = () => {
    setShowIntro(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <Schedule />

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__author">
            <span>Designed & built by</span>
            <strong>Dinesh Singh Dhami</strong>
          </div>

          <div className="site-footer__links">
  <a
    href="https://github.com/dineshsinghdhami"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/dineshsinghdhami2/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://dineshsinghdhami.com.np/"
    target="_blank"
    rel="noreferrer"
  >
    Portfolio
  </a>

  <span>© 2026</span>
</div>
        </div>
      </footer>

      {showIntro && (
        <IntroModal onClose={handleCloseIntro} />
      )}
    </>
  );
}

export default App;