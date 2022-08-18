import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "/src/style/Navbar.css";
import { useState } from "react";

export function Navbar(): JSX.Element {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "nav active" : "nav"}>
      <img
        tabIndex={1}
        src="/src/Components/Assets/image/Netflix.svg"
        alt="Netflix logo"
        className="nav__logo"
      />

      <img
        tabIndex={1}
        src="/src/Components/Assets/image/logo.png"
        alt="Netflix mobile logo"
        className="nav__log--mobile"
      />

      <aside className="nav__wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="wrapper__icon" />
        <FontAwesomeIcon icon={faBell} className="wrapper__icon" />

        <img
          tabIndex={1}
          src="/src/Components/Assets/image/avatar.png"
          alt="Avatar"
          className="wrapper__avatar"
        />
      </aside>
    </nav>
  );
}
