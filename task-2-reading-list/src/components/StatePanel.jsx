function StatePanel({ status, hasBooks, onRetry }) {
  if (status === "loading") {
    return (
      <section className="state-panel state-panel--loading" aria-live="polite">
        <div className="state-panel__icon" aria-hidden="true">
          ...
        </div>

        <div>
          <h2>Loading your reading list</h2>

          <p>
            Please wait while your saved books are being prepared.
          </p>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="state-panel state-panel--error" role="alert">
        <div className="state-panel__icon" aria-hidden="true">
          !
        </div>

        <div>
          <h2>Could not load your reading list</h2>

          <p>
            Your saved books could not be loaded. Please try again.
          </p>

          <button
            type="button"
            className="state-panel__button"
            onClick={onRetry}
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  if (status === "success" && !hasBooks) {
    return (
      <section className="state-panel state-panel--empty">
        <div className="state-panel__icon" aria-hidden="true">
          +
        </div>

        <div>
          <h2>Your reading list is empty</h2>

          <p>
            Save books you want to read later. Use the search box above
            to find your first book and add it to your list.
          </p>

          <a
            className="state-panel__button"
            href="#book-search-input"
          >
            Find my first book
          </a>
        </div>
      </section>
    );
  }

  return null;
}

export default StatePanel;