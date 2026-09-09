import { forwardRef } from "react";

const SessionCard = forwardRef(function SessionCard(
  { session, onOpen },
  ref
) {
  return (
    <article className="session-card">
      <div className="session-card__time">
        <span>{session.time}</span>
        <span aria-hidden="true">–</span>
        <span>{session.endTime}</span>
      </div>

      <h3 className="session-card__title">{session.title}</h3>

      <p className="session-card__speaker">
        Speaker: {session.speaker}
      </p>

      <p className="session-card__room">
        Room: {session.room}
      </p>

      <button
        ref={ref}
        type="button"
        className="session-card__button"
        onClick={() => onOpen(session)}
        aria-label={`View details for ${session.title}`}
      >
        View details
      </button>
    </article>
  );
});

export default SessionCard;