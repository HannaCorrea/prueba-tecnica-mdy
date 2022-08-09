import { Link } from "react-router-dom";
import Logo from "../../Assets/LogoMdy.jpg";
import "./header.css";

function Header() {
  return (
    <main>
      <div className="header-top">
        <button className="header-top-logo">
          <Link className="header-logo-image" to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </button>
        <form className="principal-form-container" action="">
          <input placeholder="Buscar aqui..." type="text" />
          <button className="form-search_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="header-bottom">
        <button className="header-bottom-menu_icon">
          <h3>CATEGORIES</h3>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </main>
  );
}
export default Header;
