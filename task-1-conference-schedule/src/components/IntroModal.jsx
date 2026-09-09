import { useEffect, useRef } from "react";

function IntroModal({ onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="intro-overlay">
      <section
        className="intro-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="intro-title"
        aria-describedby="intro-description"
      >
        <div className="intro-modal__top">
          <span className="intro-modal__label">
            DevConnect Program
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            className="intro-modal__close"
            onClick={onClose}
            aria-label="Close introduction"
          >
            ×
          </button>
        </div>

        <h2 id="intro-title">
          Conference Schedule
        </h2>

        <p id="intro-description">
          A responsive and keyboard-accessible conference schedule
          built as part of the DevConnect program.
        </p>

        <div className="intro-modal__author">
          <span>Designed & built by</span>
          <strong>Dinesh Singh Dhami</strong>
        </div>

        <p className="intro-modal__details">
          This project focuses on responsive layouts, accessibility,
          keyboard navigation, focus management, and accessible dialogs.
        </p>

        <button
          type="button"
          className="intro-modal__action"
          onClick={onClose}
        >
          Explore Schedule
        </button>
      </section>
    </div>
  );
}

export default IntroModal;