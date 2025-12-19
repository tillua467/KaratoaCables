import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { products } from "../../data/data";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={sticky ? "sticky" : ""} data-aos="fade-right">
      <Link to="/" className="logo">
        <h1>KARATOA CABLES</h1>
        <hr />
        <sub>All Time Safe</sub>
      </Link>

      <ul className={`navmenu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/shop">Shop</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="#">Docs</Link>
        </li>
      </ul>

      <div className="nav-icon">
        <SearchBar products={products} />
        <Link to="/cart">
          <i className="bx bxs-cart-add"></i>
        </Link>
        <i
          className={`bx ${menuOpen ? "bx-x" : "bx-menu"} menu-toggle`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
    </header>
  );
}
