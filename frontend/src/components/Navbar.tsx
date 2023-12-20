import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import "../styles/App.css";

const Navbar: React.FC = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const burgerMenuVisiblity = () => {
      setShowBurgerMenu(window.innerWidth < 821);
    };

    window.addEventListener("resize", burgerMenuVisiblity);
    burgerMenuVisiblity();

    return () => {
      window.removeEventListener("resize", burgerMenuVisiblity);
    };
  }, []);

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-container-wrapper">
          <div className="left-navbar-container">
            <a href="/">Notes</a>
          </div>
          <div className="right-navbar-container">
            {showBurgerMenu ? (
              <button
                className="action-icon"
                onClick={() => {
                  setShowDropdown((isOpen) => !isOpen);
                }}
              >
                {showDropdown ? "\u2716" : "\u2630"}
              </button>
            ) : (
              <div className="navbar-links-container">
                <a href="#">Login</a>
                <a href="#">Contact</a>
              </div>
            )}
          </div>
          {showDropdown && (
            <div className="responsive-navbar-container">
              <a href="#">Login</a>
              <a href="#">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
