import { useRef, useState } from "react";
import { conferenceDays, tracks, sessions } from "../data/sessions";
import SessionCard from "./SessionCard";
import SessionDialog from "./SessionDialog";

function Schedule() {
  const [activeDay, setActiveDay] = useState(conferenceDays[0].id);
  const [selectedSession, setSelectedSession] = useState(null);

  const sessionButtonRefs = useRef({});
  const lastOpenedSessionId = useRef(null);
  const dayTabRefs = useRef([]);

  const filteredSessions = sessions.filter(
    (session) => session.day === activeDay
  );

  const handleOpenSession = (session) => {
    lastOpenedSessionId.current = session.id;
    setSelectedSession(session);
  };

  const handleCloseSession = () => {
    const sessionId = lastOpenedSessionId.current;

    setSelectedSession(null);

    requestAnimationFrame(() => {
      sessionButtonRefs.current[sessionId]?.focus();
    });
  };

  const handleDayKeyDown = (event, index) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % conferenceDays.length;
    }

    if (event.key === "ArrowLeft") {
      nextIndex =
        (index - 1 + conferenceDays.length) % conferenceDays.length;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = conferenceDays.length - 1;
    }

    if (nextIndex !== index) {
      event.preventDefault();

      const nextDay = conferenceDays[nextIndex];

      setActiveDay(nextDay.id);
      dayTabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <main className="schedule" id="main-content">
      <section
        className="schedule__intro"
        aria-labelledby="schedule-heading"
      >
        <p className="schedule__eyebrow">
          DevConnect Conference 2026
        </p>

        <h1 id="schedule-heading">
          Conference Schedule
        </h1>

        <p className="schedule__description">
          Explore sessions across Frontend, Backend, and AI & ML tracks.
          Select a day and open any session to view more details.
        </p>
      </section>

      <section
        className="schedule__days"
        aria-label="Conference days"
      >
        <div
          className="day-tabs"
          role="tablist"
          aria-label="Select conference day"
        >
          {conferenceDays.map((day, index) => (
            <button
              key={day.id}
              ref={(element) => {
                dayTabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              aria-selected={activeDay === day.id}
              tabIndex={activeDay === day.id ? 0 : -1}
              className={`day-tab ${
                activeDay === day.id ? "day-tab--active" : ""
              }`}
              onClick={() => setActiveDay(day.id)}
              onKeyDown={(event) => handleDayKeyDown(event, index)}
            >
              <span>{day.label}</span>
              <small>{day.date}</small>
            </button>
          ))}
        </div>
      </section>

      <section
        className="schedule__content"
        aria-label="Conference sessions"
      >
        {tracks.map((track) => {
          const trackSessions = filteredSessions.filter(
            (session) => session.track === track.id
          );

          return (
            <section
              key={track.id}
              className="track"
              aria-labelledby={`${track.id}-heading`}
            >
              <div className="track__header">
                <h2 id={`${track.id}-heading`}>
                  {track.name}
                </h2>

                <span>
                  {trackSessions.length} sessions
                </span>
              </div>

              <div className="track__sessions">
                {trackSessions.map((session) => (
                  <SessionCard
                    key={session.id}
                    session={session}
                    onOpen={handleOpenSession}
                    ref={(element) => {
                      sessionButtonRefs.current[session.id] = element;
                    }}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </section>

      <SessionDialog
        session={selectedSession}
        onClose={handleCloseSession}
      />
    </main>
  );
}

export default Schedule;