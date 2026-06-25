import { Martini, Plus, Trash2 } from "lucide-react";

export default function AdminSpecialsPage({
  specials,
  newSpecial,
  setNewSpecial,
  addSpecial,
  removeSpecial,
}) {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <p className="eyebrow">Specials Manager</p>
        <h1>Specials</h1>
        <p className="admin-muted">
          Add, manage, and remove live food and drink specials.
        </p>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Add New Special</h3>

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

        <div className="admin-card">
          <h3>Specials Overview</h3>
          <p className="admin-muted">
            Total specials currently published: {specials.length}
          </p>
          <Martini className="icon" />
        </div>
      </div>

      <div className="admin-table-card">
        <h3>Published Specials</h3>

        <div className="admin-table">
          <div className="admin-table-row admin-table-head">
            <div>Special</div>
            <div>Deal</div>
            <div>Action</div>
          </div>

          {specials.map((special, index) => (
            <div className="admin-table-row" key={special.id || index}>
              <div>{special.name}</div>
              <div>{special.deal}</div>
              <div>
                <button className="delete" onClick={() => removeSpecial(index)}>
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