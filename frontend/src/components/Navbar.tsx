import { useState, useEffect } from "react";
import CreateNoteModal from "./CreateNoteModal";
import "../styles/Navbar.css";
import "../styles/App.css";

const Navbar: React.FC = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <a href="#" onClick={() => setIsModalOpen(true)}>
                  Create Note
                </a>
                <a href="#">Login</a>
                <a href="#">Contact</a>
              </div>
            )}
          </div>
          {showDropdown && (
            <div className="responsive-navbar-container">
              <a href="#">Create Note</a>
              <a href="#">Login</a>
              <a href="#">Contact</a>
            </div>
          )}
        </div>
      </div>
      <CreateNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        noteCreation={() => {
          setIsModalOpen(false);
        }}
      />
    </nav>
  );
};

export default Navbar;
