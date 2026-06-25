import { Clock3, MapPin, Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero-content">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}>
        <span className="badge">Bowling Green, Ohio</span>

        <h2>
          Bowling Green's home for great food, rare bourbon, live entertainment,
          game days, and unforgettable nights.
        </h2>

        <p>
          Downtown BG’s spot for game days, karaoke, martinis, wings, mules,
          and late nights with friends.
        </p>

        <div className="info-grid">
          <div><MapPin /> 130 E Wooster St</div>
          <div><Clock3 /> Mon-Fri 3PM-2AM</div>
          <div><Clock3 /> Sat-Sun Noon-2AM</div>
          <div>
            <Camera />
            <a
              href="https://instagram.com/ther.o.w.bg"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              @ther.o.w.bg
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}