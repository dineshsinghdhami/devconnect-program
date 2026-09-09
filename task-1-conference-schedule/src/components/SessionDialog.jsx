import { useEffect, useRef } from "react";

function SessionDialog({ session, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!session) {
      return;
    }

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
  }, [session, onClose]);

  if (!session) {
    return null;
  }

  return (
    <div
      className="dialog-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="session-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="session-dialog-title"
        aria-describedby="session-dialog-description"
      >
        <div className="session-dialog__header">
          <div>
            <p className="session-dialog__time">
              {session.time} – {session.endTime}
            </p>

            <h2 id="session-dialog-title">
              {session.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="session-dialog__close"
            onClick={onClose}
            aria-label="Close session details"
          >
            ×
          </button>
        </div>

        <div className="session-dialog__content">
          <p>
            <strong>Speaker:</strong> {session.speaker}
          </p>

          <p>
            <strong>Room:</strong> {session.room}
          </p>

          <p id="session-dialog-description">
            {session.description}
          </p>
        </div>

        <div className="session-dialog__footer">
          <button
            type="button"
            className="session-dialog__button"
            onClick={onClose}
          >
            Close details
          </button>
        </div>
      </section>
    </div>
  );
}

export default SessionDialog;