import { Plus, Trash2, Wine } from "lucide-react";

export default function AdminBourbonPage({
  bourbonItems,
  newBourbonItem,
  setNewBourbonItem,
  addBourbonItem,
  removeBourbonItem,
}) {
  const featured = bourbonItems.find((item) => item.featured);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <p className="eyebrow">Bourbon Vault</p>
        <h1>Bourbon Inventory</h1>
        <p className="admin-muted">
          Track rare bottles, prices, bottle levels, and featured bourbon.
        </p>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Add Bourbon</h3>

          <input
            placeholder="Bottle name"
            value={newBourbonItem.name}
            onChange={(e) =>
              setNewBourbonItem({ ...newBourbonItem, name: e.target.value })
            }
          />

          <input
            placeholder="Distillery"
            value={newBourbonItem.distillery}
            onChange={(e) =>
              setNewBourbonItem({
                ...newBourbonItem,
                distillery: e.target.value,
              })
            }
          />

          <input
            placeholder="Proof"
            value={newBourbonItem.proof}
            onChange={(e) =>
              setNewBourbonItem({ ...newBourbonItem, proof: e.target.value })
            }
          />

          <input
            placeholder="1 oz price"
            value={newBourbonItem.price_one_oz}
            onChange={(e) =>
              setNewBourbonItem({
                ...newBourbonItem,
                price_one_oz: e.target.value,
              })
            }
          />

          <input
            placeholder="1.5 oz price"
            value={newBourbonItem.price_one_half_oz}
            onChange={(e) =>
              setNewBourbonItem({
                ...newBourbonItem,
                price_one_half_oz: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Bottle remaining %"
            value={newBourbonItem.bottle_remaining}
            onChange={(e) =>
              setNewBourbonItem({
                ...newBourbonItem,
                bottle_remaining: Number(e.target.value),
              })
            }
          />

          <textarea
            placeholder="Notes"
            value={newBourbonItem.notes}
            onChange={(e) =>
              setNewBourbonItem({ ...newBourbonItem, notes: e.target.value })
            }
          />

          <label className="admin-checkbox">
            <input
              type="checkbox"
              checked={newBourbonItem.featured}
              onChange={(e) =>
                setNewBourbonItem({
                  ...newBourbonItem,
                  featured: e.target.checked,
                })
              }
            />
            Featured bottle
          </label>

          <button onClick={addBourbonItem}>
            <Plus size={16} /> Add Bourbon
          </button>
        </div>

        <div className="admin-card">
          <h3>Featured Bourbon</h3>

          {featured ? (
            <>
              <Wine className="icon" />
              <h2>{featured.name}</h2>
              <p className="admin-muted">{featured.distillery}</p>

              <div className="bourbon-meter">
                <div
                  className="bourbon-meter-fill"
                  style={{ width: `${featured.bottle_remaining}%` }}
                />
              </div>

              <p className="admin-muted">
                {featured.bottle_remaining}% bottle remaining
              </p>
            </>
          ) : (
            <p className="admin-muted">No featured bourbon selected yet.</p>
          )}
        </div>
      </div>

      <div className="admin-table-card">
        <h3>Bourbon Collection</h3>

        <div className="admin-table">
          <div className="admin-table-row admin-table-head">
            <div>Bottle</div>
            <div>Distillery</div>
            <div>Proof</div>
            <div>1 oz</div>
            <div>1.5 oz</div>
            <div>Remaining</div>
            <div>Featured</div>
            <div>Action</div>
          </div>

          {bourbonItems.map((item, index) => (
            <div className="admin-table-row" key={item.id || index}>
              <div>{item.name}</div>
              <div>{item.distillery}</div>
              <div>{item.proof}</div>
              <div>{item.price_one_oz}</div>
              <div>{item.price_one_half_oz}</div>
              <div>{item.bottle_remaining}%</div>
              <div>{item.featured ? "Yes" : "No"}</div>
              <div>
                <button
                  className="delete"
                  onClick={() => removeBourbonItem(index)}
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