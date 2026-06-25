import { Plus } from "lucide-react";

export default function AdminDashboard({
  newEvent,
  setNewEvent,
  newSpecial,
  setNewSpecial,
  addEvent,
  addSpecial,
  resetEvents,
  resetSpecials,
}) {
  return (
    <section className="admin-panel">
      <h2>Admin Dashboard</h2>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button className="admin-btn" onClick={resetEvents}>
          Reset Events
        </button>

        <button className="admin-btn" onClick={resetSpecials}>
          Reset Specials
        </button>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Add Event</h3>

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
          <h3>Add Special</h3>

          <input
            placeholder="Special name"
            value={newSpecial.name}
            onChange={(e) =>
              setNewSpecial({ ...newSpecial, name: e.target.value })
            }
          />

          <textarea
            placeholder="Deal"
            value={newSpecial.deal}
            onChange={(e) =>
              setNewSpecial({ ...newSpecial, deal: e.target.value })
            }
          />

          <button onClick={addSpecial}>
            <Plus size={16} /> Add Special
          </button>
        </div>
      </div>
    </section>
  );
}