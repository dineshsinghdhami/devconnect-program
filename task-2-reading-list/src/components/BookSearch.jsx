import { useEffect, useState } from "react";

const categories = [
  "Programming",
  "Web Development",
  "JavaScript",
  "Python",
  "React",
  "Databases",
  "Data Science",
  "Artificial Intelligence",
  "Machine Learning",
];

function BookSearch({ onAddBook, readingList }) {
  const [query, setQuery] = useState("programming");
  const [results, setResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const searchBooks = async (searchQuery) => {
    const cleanedQuery = searchQuery.trim();

    if (!cleanedQuery) {
      return;
    }

    setSearchStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          cleanedQuery
        )}&limit=18`
      );

      if (!response.ok) {
        throw new Error("Search request failed.");
      }

      const data = await response.json();

      const books = data.docs.map((book) => ({
        id: book.key,
        title: book.title || "Untitled book",
        author:
          book.author_name?.slice(0, 2).join(", ") ||
          "Unknown author",
        year: book.first_publish_year || "Unknown",
        coverId: book.cover_i || null,
      }));

      setResults(books);
      setSearchStatus("success");
    } catch {
      setSearchStatus("error");
      setErrorMessage(
        "Books could not be loaded. Please check your connection and try again."
      );
    }
  };

  useEffect(() => {
    searchBooks("programming");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBooks(query);
  };

  const handleCategory = (category) => {
    setQuery(category);
    searchBooks(category);
  };

  const isSaved = (bookId) =>
    readingList.some((book) => book.id === bookId);

  return (
    <section className="books-section" id="books">
      <div className="books-heading">
        <div>
          <p className="eyebrow">Browse</p>
          <h1>All books</h1>

          {searchStatus === "success" && (
            <span>{results.length} books found</span>
          )}
        </div>

        <form
          className="book-search-form"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="book-search-input"
            className="sr-only"
          >
            Search books
          </label>

          <input
            id="book-search-input"
            type="search"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search books..."
          />

          <button type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="category-row">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {searchStatus === "loading" && (
        <div className="catalog-message">
          Loading books...
        </div>
      )}

      {searchStatus === "error" && (
        <div
          className="catalog-message catalog-message--error"
          role="alert"
        >
          <strong>Could not load books.</strong>
          <p>{errorMessage}</p>

          <button
            type="button"
            onClick={() => searchBooks(query)}
          >
            Try again
          </button>
        </div>
      )}

      {searchStatus === "success" &&
        results.length === 0 && (
          <div className="catalog-message">
            <strong>No books found.</strong>
            <p>Try another search.</p>
          </div>
        )}

      {searchStatus === "success" &&
        results.length > 0 && (
          <div className="books-grid">
            {results.map((book) => {
              const coverUrl = book.coverId
                ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
                : null;

              return (
                <article
                  key={book.id}
                  className="book-card"
                >
                  <div className="book-cover">
                    {coverUrl ? (
                      <img
                        src={coverUrl}
                        alt={`Cover of ${book.title}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="book-placeholder">
                        No cover
                      </div>
                    )}
                  </div>

                  <div className="book-content">
                    <h3>{book.title}</h3>

                    <p>{book.author}</p>

                    <span>
                      First published: {book.year}
                    </span>

                    <button
                      type="button"
                      disabled={isSaved(book.id)}
                      onClick={() => onAddBook(book)}
                    >
                      {isSaved(book.id)
                        ? "Added"
                        : "Add to reading list"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
    </section>
  );
}

export default BookSearch;