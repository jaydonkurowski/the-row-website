import bourbonMenu from "../assets/Bourbon Menu.png";

export default function BourbonSection() {
  return (
    <section id="bourbon" className="section dark">
      <p className="eyebrow">Rare Bourbon Collection</p>
      <h2>Bourbon at The R.O.W.</h2>

      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <a href={bourbonMenu} target="_blank" rel="noreferrer">
          <img
            src={bourbonMenu}
            alt="Bourbon Menu"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </a>
      </div>
    </section>
  );
}
