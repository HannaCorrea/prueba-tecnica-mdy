import { Link } from "react-router-dom";
import Logo from "../../Assets/LogoMdy.jpg";
import MenuCategories from "../../Components/MenuCategories/menuCategories.jsx";
import SearchBar from "../SearchBar/searchBar";
import "./header.css";

function Header() {
  return (
    <main className="principal-header">
      <div className="header-top">
        <button className="header-top-logo">
          <Link className="header-logo-image" to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </button>
        <SearchBar />
      </div>
      <MenuCategories />
    </main>
  );
}
export default Header;
