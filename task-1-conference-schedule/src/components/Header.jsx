function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__brand"
          href="#main-content"
          aria-label="DevConnect Conference home"
        >
          <span className="brand-mark">D</span>

          <span className="brand-text">
            DevConnect
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#main-content">
            Schedule
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;