import AdminEventsPageComponent from "../components/AdminEventsPage";

export default function AdminEventsPage({
  events,
  newEvent,
  setNewEvent,
  addEvent,
  removeEvent,
}) {
  return (
    <AdminEventsPageComponent
      events={events}
      newEvent={newEvent}
      setNewEvent={setNewEvent}
      addEvent={addEvent}
      removeEvent={removeEvent}
    />
  );
}
