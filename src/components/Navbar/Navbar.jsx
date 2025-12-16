import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { products } from "../../data/data"; 
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header data-aos="fade-right">
      <Link to="/" className="logo">
        <h1>KARATOA CABLES</h1>
        <hr />
        <sub>All Time Safe</sub>
      </Link>

  <ul className="navmenu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="#">Docs</Link></li>
  </ul>

  <div className="nav-icon">
    <SearchBar products={products} />
    <Link to="/cart"><i className="bx bxs-cart-add"></i></Link>
    <div className="bx bx-menu" id="menu-icon"></div>
  </div>
</header>

  );
}
