import { Pencil } from "lucide-react";
import rowLogo from "../assets/row-logo.jpg";

export default function Navbar({ adminOpen, setAdminOpen }) {
  return (
    <nav className="navbar">
      <div className="logo-area">
        <img
          src={rowLogo}
          alt="The R.O.W."
          style={{
            height: "60px",
            borderRadius: "8px",
          }}
        />
      </div>

      <div className="nav-links">
        <a href="#events">Events</a>
        <a href="#specials">Specials</a>
        <a href="#menu">Menu</a>
        <a href="#bourbon">Bourbon</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className="admin-btn"
        onClick={() => setAdminOpen(!adminOpen)}
      >
        <Pencil size={18} /> Admin
      </button>
    </nav>
  );
}
