import tacoTuesday from "../assets/taco-tuesday.jpg";
import dailySpecials from "../assets/daily-specials.jpg";
import fridaySpecials from "../assets/friday-special.jpg";
import saturdaySpecials from "../assets/saturday-special.jpg";

export default function GallerySection() {
  return (
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
  );
}