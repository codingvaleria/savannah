import { NavLink, useLocation } from "react-router-dom";

function MainNavigation() {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/rick-and-morty/reference"
            className={pathname.includes("rick-and-morty") ? "active" : ""}
          >
            Rick And Morty API
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/unsplash/reference"
            className={pathname.includes("unsplash") ? "active" : ""}
          >
            Unsplash API
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
