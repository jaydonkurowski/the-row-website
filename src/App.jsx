import React, { useState } from "react";
import {
  Clock3,
  MapPin,
  Martini,
  Music4,
  Pencil,
  Plus,
  Trash2,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";import rowLogo from "./assets/row-logo.jpg";
import bourbonMenu from "./assets/Bourbon Menu.png";
import chickenMenu from "./assets/chicken-menu.jpg";
import dailySpecials from "./assets/daily-specials.jpg";
import fridaySpecials from "./assets/friday-special.jpg";
import saturdaySpecials from "./assets/saturday-special.jpg";
import smashBurgers from "./assets/smash-burgers.jpg";
import tacoTuesday from "./assets/taco-tuesday.jpg";

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  const [events, setEvents] = useState([
    {
      title: "Thursday Karaoke",
      day: "Thursday",
      time: "10PM–1AM",
      details: "Karaoke, $3 R.O.W. Margs, $4 Crown, $3 Jäger Bombs after 9",
    },
    {
      title: "Friday Night at The R.O.W.",
      day: "Friday",
      time: "Happy Hour till 9",
      details: "$4 Long Islands, $5 Mules, $6 Berry Basil Mules",
    },
    {
      title: "Saturday Late Night",
      day: "Saturday",
      time: "Noon–2AM",
      details: "$3 Mimosas, $4 Sangria, sports, food, and weekend energy",
    },
  ]);

  const [specials, setSpecials] = useState([
    { name: "Martini Monday", deal: "$1 off martinis + $3 wells" },
    { name: "Taco Tuesday", deal: "$2 tacos • $2.50 Dos Equis • $3 wells" },
    { name: "Wing Wednesday", deal: "$9.99 wings + $3 wells" },
    { name: "Friday Favorites", deal: "$4 Long Islands • $5 Mules • $6 Berry Basil Mules" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", day: "", time: "", details: "" });
  const [newSpecial, setNewSpecial] = useState({ name: "", deal: "" });

  function addEvent() {
    if (!newEvent.title) return;
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", day: "", time: "", details: "" });
  }

  function addSpecial() {
    if (!newSpecial.name) return;
    setSpecials([...specials, newSpecial]);
    setNewSpecial({ name: "", deal: "" });
  }

  return (
    <div className="site">
      <section className="hero">
        <div className="overlay">
          <nav className="navbar">
  <div className="logo-area">
    <img
      src={rowLogo}
      alt="The R.O.W."
      style={{ height: "60px", borderRadius: "8px" }}
    />
  </div>

  <div className="nav-links">
    <a href="#events">Events</a>
    <a href="#specials">Specials</a>
    <a href="#menu">Menu</a>
    <a href="#bourbon">Bourbon</a>
    <a href="#contact">Contact</a>
  </div>

  <button className="admin-btn" onClick={() => setAdminOpen(!adminOpen)}>
    <Pencil size={18} /> Admin
  </button>
</nav>

          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge">Bowling Green, Ohio</span>
              <h2>Bowling Green's home for great food, rare bourbon, live entertainment, game days, and unforgettable nights.</h2>
              <p>
                Downtown BG’s spot for game days, karaoke, martinis, wings, mules,
                and late nights with friends.
              </p>

<div className="info-grid">
  <div><MapPin /> 130 E Wooster St</div>
  <div><Clock3 /> Mon-Fri 3PM-2AM</div>
  <div><Clock3 /> Sat-Sun Noon-2AM</div>
<div>
  <Camera />
  <a
    href="https://instagram.com/ther.o.w.bg"
    target="_blank"
    rel="noreferrer"
    style={{ color: "white" }}
  >
    @ther.o.w.bg
  </a>
</div></div>
            </motion.div>
          </div>
        </div>
      </section>

      {adminOpen && (
        <section className="admin-panel">
          <h2>Admin Dashboard</h2>

          <div className="admin-grid">
            <div className="admin-card">
              <h3>Add Event</h3>
              <input placeholder="Event title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              <input placeholder="Day" value={newEvent.day} onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })} />
              <input placeholder="Time" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} />
              <textarea placeholder="Details" value={newEvent.details} onChange={(e) => setNewEvent({ ...newEvent, details: e.target.value })} />
              <button onClick={addEvent}><Plus size={16} /> Add Event</button>
            </div>

            <div className="admin-card">
              <h3>Add Special</h3>
              <input placeholder="Special name" value={newSpecial.name} onChange={(e) => setNewSpecial({ ...newSpecial, name: e.target.value })} />
              <textarea placeholder="Deal" value={newSpecial.deal} onChange={(e) => setNewSpecial({ ...newSpecial, deal: e.target.value })} />
              <button onClick={addSpecial}><Plus size={16} /> Add Special</button>
            </div>
          </div>
        </section>
      )}

      <section id="events" className="section">
  <p className="eyebrow">Weekly Events</p>
        <h2>What’s Happening</h2>

        <div className="cards">
          {events.map((event, index) => (
            <div className="card" key={index}>
              <Music4 className="icon" />
              <h3>{event.title}</h3>
              <p className="muted">{event.day} • {event.time}</p>
              <p>{event.details}</p>
              {adminOpen && (
                <button className="delete" onClick={() => setEvents(events.filter((_, i) => i !== index))}>
                  <Trash2 size={15} /> Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="specials" className="section dark">
  <p className="eyebrow">Food & Drink Specials</p>
        <h2>Daily Deals</h2>

        <div className="cards">
          {specials.map((special, index) => (
            <div className="card" key={index}>
              <Martini className="icon" />
              <h3>{special.name}</h3>
              <p>{special.deal}</p>
              {adminOpen && (
                <button className="delete" onClick={() => setSpecials(specials.filter((_, i) => i !== index))}>
                  <Trash2 size={15} /> Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
<section id="menu" className="section">
  <p className="eyebrow">Food Menu</p>
  <h2>Kitchen Favorites</h2>

  <div className="gallery">
<a href={smashBurgers} target="_blank">
  <img src={smashBurgers} alt="Smash Burgers" />
</a>    <a href={chickenMenu} target="_blank">
  <img src={chickenMenu} alt="Chicken Menu" />
</a>
  </div>
</section>
<section id="bourbon" className="section dark">
  <p className="eyebrow">Rare Bourbon Collection</p>
  <h2>Bourbon at The R.O.W.</h2>

  <div style={{ maxWidth: "700px", margin: "0 auto" }}>
<a href={bourbonMenu} target="_blank">
  <img
      src={bourbonMenu}
      alt="Bourbon Menu"
      style={{
        width: "100%",
        borderRadius: "20px"
      }}
    />
    </a>

  </div>
</section>
      <section className="section">
        <p className="eyebrow">Gallery</p>
        <h2>The R.O.W. Vibe</h2>

        <div className="gallery">
  <img src={tacoTuesday} alt="Taco Tuesday" />
  <img src={dailySpecials} alt="Daily Specials" />
  <img src={fridaySpecials} alt="Friday Specials" />
  <img src={saturdaySpecials} alt="Saturday Specials" />
</div>
      </section>

<footer id="contact">
          <h2>The R.O.W.</h2>
        <p>130 E Wooster St • Bowling Green, Ohio • @ther.o.w.bg</p>
      </footer>
    </div>
  );
}