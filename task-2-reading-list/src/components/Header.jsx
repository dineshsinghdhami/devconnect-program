function Header({ readingCount }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="/" className="site-brand">
          Reading Book List
        </a>

        <nav aria-label="Primary navigation">
          <a href="#books">Books</a>
          <a href="#reading-list">
            My Reading List ({readingCount})
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;