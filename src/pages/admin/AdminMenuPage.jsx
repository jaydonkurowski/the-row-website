import { Plus, Trash2, Utensils } from "lucide-react";

export default function AdminMenuPage({
  menuItems,
  newMenuItem,
  setNewMenuItem,
  addMenuItem,
  removeMenuItem,
}) {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <p className="eyebrow">Menu Manager</p>
        <h1>Menu</h1>
        <p className="admin-muted">
          Add, manage, and remove live food menu items.
        </p>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Add Menu Item</h3>

          <input
            placeholder="Category"
            value={newMenuItem.category}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, category: e.target.value })
            }
          />

          <input
            placeholder="Item name"
            value={newMenuItem.name}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, name: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            value={newMenuItem.description}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, description: e.target.value })
            }
          />

          <input
            placeholder="Price"
            value={newMenuItem.price}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, price: e.target.value })
            }
          />

          <button onClick={addMenuItem}>
            <Plus size={16} /> Add Menu Item
          </button>
        </div>

        <div className="admin-card">
          <h3>Menu Overview</h3>
          <p className="admin-muted">
            Total menu items currently published: {menuItems.length}
          </p>
          <Utensils className="icon" />
        </div>
      </div>

      <div className="admin-table-card">
        <h3>Published Menu Items</h3>

        <div className="admin-table">
          <div className="admin-table-row admin-table-head">
            <div>Category</div>
            <div>Item</div>
            <div>Description</div>
            <div>Price</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {menuItems.map((item, index) => (
            <div className="admin-table-row" key={item.id || index}>
              <div>{item.category}</div>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.price}</div>
              <div>{item.available ? "Available" : "Unavailable"}</div>
              <div>
                <button className="delete" onClick={() => removeMenuItem(index)}>
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