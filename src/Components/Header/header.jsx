import { Link } from "react-router-dom";
import Logo from "../../Assets/MdyPositivo.png";
import MenuCategories from "../../Components/MenuCategories/menuCategories.jsx";
import SearchBar from "../SearchBar/searchBar";
import "./header.css";

function Header() {
  return (
    <header className="principal-header">
      <div className="header-top">
        <Link className="header-logo" to={"/"}>
          <img className="header-logo-image" src={Logo} alt="" />
        </Link>
        <SearchBar />
      </div>
      <MenuCategories />
    </header>
  );
}
export default Header;
