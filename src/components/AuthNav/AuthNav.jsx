import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <div className={s.autnav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AuthNav;
