import smashBurgers from "../assets/smash-burgers.jpg";
import chickenMenu from "../assets/chicken-menu.jpg";

export default function FoodMenuSection() {
  return (
    <section id="menu" className="section">
      <p className="eyebrow">Food Menu</p>
      <h2>Kitchen Favorites</h2>

      <div className="gallery">
        <a href={smashBurgers} target="_blank" rel="noreferrer">
          <img src={smashBurgers} alt="Smash Burgers" />
        </a>

        <a href={chickenMenu} target="_blank" rel="noreferrer">
          <img src={chickenMenu} alt="Chicken Menu" />
        </a>
      </div>
    </section>
  );
}
