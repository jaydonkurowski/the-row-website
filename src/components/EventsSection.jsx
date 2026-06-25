import { Music4, Trash2 } from "lucide-react";

export default function EventsSection({ events, adminOpen, removeEvent }) {
  return (
    <section id="events" className="section">
      <p className="eyebrow">Weekly Events</p>
      <h2>What’s Happening</h2>

      <div className="cards">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <Music4 className="icon" />
            <h3>{event.title}</h3>
            <p className="muted">
              {event.day} • {event.time}
            </p>
            <p>{event.details}</p>

            {adminOpen && (
              <button className="delete" onClick={() => removeEvent(index)}>
                <Trash2 size={15} /> Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}