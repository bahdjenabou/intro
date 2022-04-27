import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to={"/"}>
          <span>Logo</span>
        </Link>
      </div>
      <ul>
        <Link to={"/"}>
          <li>Accueil</li>
        </Link>
        <Link to={"/about"}>
          <li>A propos</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link to={"/generate"}>
          <li>Generer un nombre</li>
        </Link>
        <Link to={"/food"}>
          <li>Generer nourriture</li>
        </Link>
        <Link to={"/dice"}>
          <li>Generer D</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
