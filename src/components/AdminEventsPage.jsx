import { CalendarDays, Plus, Trash2 } from "lucide-react";

export default function AdminEventsPage({
  events,
  newEvent,
  setNewEvent,
  addEvent,
  removeEvent,
}) {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <p className="eyebrow">Events Manager</p>
        <h1>Events</h1>
        <p className="admin-muted">
          Add, manage, and remove live events shown on the public website.
        </p>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Add New Event</h3>

          <input
            placeholder="Event title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />

          <input
            placeholder="Day"
            value={newEvent.day}
            onChange={(e) =>
              setNewEvent({ ...newEvent, day: e.target.value })
            }
          />

          <input
            placeholder="Time"
            value={newEvent.time}
            onChange={(e) =>
              setNewEvent({ ...newEvent, time: e.target.value })
            }
          />

          <textarea
            placeholder="Details"
            value={newEvent.details}
            onChange={(e) =>
              setNewEvent({ ...newEvent, details: e.target.value })
            }
          />

          <button onClick={addEvent}>
            <Plus size={16} /> Add Event
          </button>
        </div>

        <div className="admin-card">
          <h3>Event Overview</h3>
          <p className="admin-muted">
            Total events currently published: {events.length}
          </p>
          <CalendarDays className="icon" />
        </div>
      </div>

      <div className="admin-table-card">
        <h3>Published Events</h3>

        <div className="admin-table">
          <div className="admin-table-row admin-table-head">
            <div>Event</div>
            <div>Day</div>
            <div>Time</div>
            <div>Details</div>
            <div>Action</div>
          </div>

          {events.map((event, index) => (
            <div className="admin-table-row" key={event.id || index}>
              <div>{event.title}</div>
              <div>{event.day}</div>
              <div>{event.time}</div>
              <div>{event.details}</div>
              <div>
                <button
                  className="delete"
                  onClick={() => removeEvent(index)}
                >
                  <Trash2 size={15} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}