import { Link } from "react-router-dom";
import Banner from "../../Assets/banner.jpg";
import Logo from "../../Assets/LogoMdy.png";

function Header() {
  return (
    <section>
      <img src={Banner} alt="" />
      <div>
        <button>
          <i className="fa-solid fa-bars-staggered"></i>
          <h3>CATEGORIES</h3>
        </button>
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
      </div>
    </section>
  );
}
export default Header;
