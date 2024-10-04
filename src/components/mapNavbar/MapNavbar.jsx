import { NavLink } from "react-router-dom";
import "./mapNavbar.scss";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MapNavbar = () => {
  const navLinks = [
    { label: "Mərtəbə 1", path: "" },
    { label: "Mərtəbə 2", path: "Mərtəbə-2" },
    { label: "Mərtəbə 3", path: "Mərtəbə-3" },
    { label: "Zirzəmi", path: "Zirzəmi" },
  ];

  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "black" : "",
  });

  return (
    <div className="mapNavbar">
      <Link to="/binalar" className="backLink">
        <IoReturnDownBackSharp />
        <span>Geri</span>
      </Link>
      <h1>Connect</h1>
      <div className="navBox">
        {navLinks.map((link, index) => (
          <NavLink
            className={({ isActive }) => ` ${isActive ? "navlink" : ""}`}
            key={index}
            style={getNavLinkStyle}
            to={link.path}
            end={link.path === ""}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MapNavbar;
