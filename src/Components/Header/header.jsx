import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../Assets/LogoMdy.jpg";
import MenuCategories from "../../Components/MenuCategories/menuCategories.jsx";
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
        <form className="principal-form-container" action="">
          <input placeholder="Buscar aqui..." type="text" />
          <button className="form-search_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <MenuCategories />
    </main>
  );
}
export default Header;
