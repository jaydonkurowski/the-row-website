import React, { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/supabase";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AdminDashboard from "./components/AdminDashboard";
import EventsSection from "./components/EventsSection";
import SpecialsSection from "./components/SpecialsSection";
import FoodMenuSection from "./components/FoodMenuSection";
import BourbonSection from "./components/BourbonSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout";
import { defaultEvents, defaultSpecials } from "./data/defaultData";
import AdminDashboardHome from "./components/AdminDashboardHome";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminEventsPage from "./pages/admin/AdminEventsPage";
import AdminSpecialsPage from "./pages/admin/AdminSpecialsPage";
export default function App() {
  const location = useLocation();
const isAdminRoute = location.pathname.startsWith("/admin");
  const [adminOpen, setAdminOpen] = useState(false);
const [activeAdminTab, setActiveAdminTab] = useState("dashboard");
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("rowEvents");
    return saved ? JSON.parse(saved) : defaultEvents;
  });

  const [specials, setSpecials] = useState(() => {
    const saved = localStorage.getItem("rowSpecials");
    return saved ? JSON.parse(saved) : defaultSpecials;
  });

  const [newEvent, setNewEvent] = useState({
    title: "",
    day: "",
    time: "",
    details: "",
  });

  const [newSpecial, setNewSpecial] = useState({
    name: "",
    deal: "",
  });

  useEffect(() => {
  fetchEvents();
  fetchSpecials();
}, []);

async function fetchEvents() {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching events:", error);
    return;
  }

  setEvents(data);
}
async function fetchSpecials() {
  const { data, error } = await supabase
    .from("specials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching specials:", error);
    return;
  }

  setSpecials(data);
}
  useEffect(() => {
    localStorage.setItem("rowSpecials", JSON.stringify(specials));
  }, [specials]);

async function addEvent() {
  console.log("Add Event clicked", newEvent);

  if (!newEvent.title.trim()) {
    console.log("No title entered");
    return;
  }

  const { data, error } = await supabase
    .from("events")
    .insert([newEvent])
    .select();

  console.log("Supabase insert result:", { data, error });

  if (error) {
    alert("Supabase error: " + error.message);
    return;
  }

  setNewEvent({ title: "", day: "", time: "", details: "" });
  fetchEvents();
}

 async function addSpecial() {
  if (!newSpecial.name.trim()) return;

  const { error } = await supabase
    .from("specials")
    .insert([newSpecial]);

  if (error) {
    alert("Error adding special: " + error.message);
    return;
  }

  setNewSpecial({ name: "", deal: "" });
  fetchSpecials();
}

 async function removeEvent(index) {
  const eventToDelete = events[index];

  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", eventToDelete.id);

  if (error) {
    alert("Error deleting event: " + error.message);
    return;
  }

  fetchEvents();
}

  async function removeSpecial(index) {
  const specialToDelete = specials[index];

  const { error } = await supabase
    .from("specials")
    .delete()
    .eq("id", specialToDelete.id);

  if (error) {
    alert("Error deleting special: " + error.message);
    return;
  }

  fetchSpecials();
}

  function resetEvents() {
    setEvents(defaultEvents);
  }

  function resetSpecials() {
    setSpecials(defaultSpecials);
  }

  return (
    <div className="site">
      <section className="hero">
        <div className="overlay">
          <Navbar adminOpen={adminOpen} setAdminOpen={setAdminOpen} />
          <Hero />
        </div>
      </section>

      {(adminOpen || isAdminRoute) && (
  <AdminLayout
  onClose={() => setAdminOpen(false)}
  activeAdminTab={activeAdminTab}
  setActiveAdminTab={setActiveAdminTab}
>
<Routes>
  <Route
    path="/admin"
    element={<Navigate to="/admin/dashboard" replace />}
  />

  <Route
    path="/admin/dashboard"
    element={<AdminDashboardPage events={events} specials={specials} />}
  />

  <Route
    path="/admin/events"
    element={
      <AdminEventsPage
        events={events}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        addEvent={addEvent}
        removeEvent={removeEvent}
      />
    }
  />

  <Route
    path="/admin/specials"
    element={
      <AdminSpecialsPage
        specials={specials}
        newSpecial={newSpecial}
        setNewSpecial={setNewSpecial}
        addSpecial={addSpecial}
        removeSpecial={removeSpecial}
      />
    }
  />

  <Route
    path="/admin/*"
    element={
      <div className="admin-page">
        <div className="admin-page-header">
          <p className="eyebrow">Coming Soon</p>
          <h1>Section Coming Soon</h1>
          <p className="admin-muted">This section is being built next.</p>
        </div>
      </div>
    }
  />
</Routes>

{activeAdminTab !== "dashboard" &&
  activeAdminTab !== "events" &&
  activeAdminTab !== "specials" && (
    <div className="admin-page">
      <div className="admin-page-header">
        <p className="eyebrow">Coming Soon</p>
        <h1>{activeAdminTab}</h1>
        <p className="admin-muted">This section is being built next.</p>
      </div>
    </div>
  )}
  </AdminLayout>
)}

      <EventsSection
        events={events}
        adminOpen={adminOpen}
        removeEvent={removeEvent}
      />

      <SpecialsSection
        specials={specials}
        adminOpen={adminOpen}
        removeSpecial={removeSpecial}
      />

      <FoodMenuSection />
      <BourbonSection />
      <GallerySection />
      <Footer />
    </div>
  );
}