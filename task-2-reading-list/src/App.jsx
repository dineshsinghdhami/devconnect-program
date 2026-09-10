import { useEffect, useState } from "react";
import Header from "./components/Header";
import BookSearch from "./components/BookSearch";
import ReadingList from "./components/ReadingList";
import StatePanel from "./components/StatePanel";
import "./App.css";

function App() {
  const [readingList, setReadingList] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedBooks = localStorage.getItem("devconnect-reading-list");

        if (savedBooks) {
          setReadingList(JSON.parse(savedBooks));
        }

        setStatus("success");
      } catch {
        setStatus("error");
      }
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === "success") {
      localStorage.setItem(
        "devconnect-reading-list",
        JSON.stringify(readingList)
      );
    }
  }, [readingList, status]);

  const addBook = (book) => {
    const alreadyExists = readingList.some(
      (item) => item.id === book.id
    );

    if (alreadyExists) {
      return;
    }

    setReadingList((currentList) => [
      ...currentList,
      book,
    ]);
  };

  const removeBook = (bookId) => {
    setReadingList((currentList) =>
      currentList.filter((book) => book.id !== bookId)
    );
  };

  const showLoadingState = () => {
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 1800);
  };

  const showErrorState = () => {
    setStatus("error");
  };

  const showEmptyState = () => {
    setReadingList([]);
    setStatus("success");
  };

  return (
    <>
      <Header readingCount={readingList.length} />

      <main className="page-shell">
        <section className="page-banner">
          <p>
            Search real books from Open Library and build your personal reading list.
          </p>
        </section>

        <section className="content-layout">
          <div className="content-main">
            <StatePanel
              status={status}
              hasBooks={readingList.length > 0}
              onRetry={() => setStatus("success")}
            />

            {status === "success" && (
              <BookSearch
                onAddBook={addBook}
                readingList={readingList}
              />
            )}

            {status === "success" && (
              <ReadingList
                books={readingList}
                onRemoveBook={removeBook}
              />
            )}
          </div>

          <aside className="right-sidebar">
            <section className="sidebar-section">
              <h2>Reviewer tools</h2>

              <p>
                Test the required application states.
              </p>

              <div className="reviewer-buttons">
                <button
                  type="button"
                  onClick={showLoadingState}
                >
                  Loading
                </button>

                <button
                  type="button"
                  onClick={showErrorState}
                >
                  Error
                </button>

                <button
                  type="button"
                  onClick={showEmptyState}
                >
                  Empty
                </button>
              </div>
            </section>

            <section className="sidebar-section">
              <h2>About this task</h2>

              <p>
                Built for DevConnect Task 2 using React,
                Open Library API and browser localStorage.
              </p>
            </section>

            <section className="sidebar-section sidebar-author">
              <h2>Built by</h2>

              <strong>Dinesh Singh Dhami</strong>

              <div>
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
              </div>
            </section>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© 2026 Dinesh Singh Dhami</span>
          <span>DevConnect · Personal Reading List</span>
        </div>
      </footer>
    </>
  );
}

export default App;