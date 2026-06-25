import { Martini, Trash2 } from "lucide-react";

export default function SpecialsSection({ specials, adminOpen, removeSpecial }) {
  return (
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
              <button className="delete" onClick={() => removeSpecial(index)}>
                <Trash2 size={15} /> Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}