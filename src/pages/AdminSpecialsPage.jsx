import AdminSpecialsPageComponent from "../components/AdminSpecialsPage";

export default function AdminSpecialsPage({
  specials,
  newSpecial,
  setNewSpecial,
  addSpecial,
  removeSpecial,
}) {
  return (
    <AdminSpecialsPageComponent
      specials={specials}
      newSpecial={newSpecial}
      setNewSpecial={setNewSpecial}
      addSpecial={addSpecial}
      removeSpecial={removeSpecial}
    />
  );
}