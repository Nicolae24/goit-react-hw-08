import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={"/"}>Home Page</NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.item}>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
