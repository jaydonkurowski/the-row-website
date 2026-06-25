import {
  CalendarDays,
  Martini,
  Globe,
  Sparkles,
  Wine,
  Tv,
} from "lucide-react";

export default function AdminDashboardHome({ events, specials }) {
  const nextEvent = events[0];
  const currentSpecial = specials[0];

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <p className="eyebrow">Dashboard</p>
        <h1>The R.O.W. OS</h1>
        <p className="admin-muted">
          Quick view of what’s happening at The R.O.W. right now.
        </p>
      </div>

      <div className="admin-stat-grid">
        <div className="admin-stat-card">
          <CalendarDays className="icon" />
          <p>Next Event</p>
          <h3>{nextEvent ? nextEvent.title : "No events yet"}</h3>
        </div>

        <div className="admin-stat-card">
          <Martini className="icon" />
          <p>Current Special</p>
          <h3>{currentSpecial ? currentSpecial.name : "No specials yet"}</h3>
        </div>

        <div className="admin-stat-card">
          <Wine className="icon" />
          <p>Bourbon Feature</p>
          <h3>Weller Millennium</h3>
        </div>

        <div className="admin-stat-card">
          <Globe className="icon" />
          <p>Website Status</p>
          <h3>Online</h3>
        </div>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Quick Actions</h3>
          <p className="admin-muted">
            Jump into events, specials, menu updates, bourbon inventory, or media uploads.
          </p>
        </div>

        <div className="admin-card">
          <h3>AI Marketing Assistant</h3>
          <p className="admin-muted">
            Soon this will help generate captions, flyer ideas, event promos, and bourbon features.
          </p>
          <button className="admin-btn">
            <Sparkles size={16} /> Generate Idea
          </button>
        </div>

        <div className="admin-card">
          <h3>TV Manager Preview</h3>
          <p className="admin-muted">
            Track what’s playing on each of the 16 TVs.
          </p>
          <button className="admin-btn">
            <Tv size={16} /> Open TV Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}