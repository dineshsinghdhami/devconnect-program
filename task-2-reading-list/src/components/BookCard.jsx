function BookCard({ book, onRemoveBook }) {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : null;

  return (
    <article className="saved-book-card">
      <div className="saved-book-cover">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`Cover of ${book.title}`}
          />
        ) : (
          <div className="book-placeholder">
            No cover
          </div>
        )}
      </div>

      <div className="saved-book-content">
        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <button
          type="button"
          onClick={() => onRemoveBook(book.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default BookCard;