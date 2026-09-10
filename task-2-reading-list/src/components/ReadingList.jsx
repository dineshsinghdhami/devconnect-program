import BookCard from "./BookCard";

function ReadingList({ books, onRemoveBook }) {
  return (
    <section
      className="reading-list"
      id="reading-list"
    >
      <div className="reading-list__heading">
        <div>
          <p className="eyebrow">My collection</p>
          <h2>Saved books</h2>
        </div>

        <span>
          {books.length}{" "}
          {books.length === 1 ? "book" : "books"}
        </span>
      </div>

      {books.length === 0 ? (
        <div className="empty-list">
          <h3>Your reading list is empty</h3>

          <p>
            Add a book from the catalog above to start
            building your reading list.
          </p>

          <a href="#books">
            Browse books
          </a>
        </div>
      ) : (
        <div className="saved-books-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onRemoveBook={onRemoveBook}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ReadingList;