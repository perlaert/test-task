import { NavLink } from "react-router-dom";
import routes from "../../routes";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink exact to={routes.home} className={style.NavLink} activeClassName={style.NavLinkActive}>
          Home
        </NavLink>

        <NavLink to={routes.gallery} className={style.NavLink} activeClassName={style.NavLinkActive}>
          Gallery
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
