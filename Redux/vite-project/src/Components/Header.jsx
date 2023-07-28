import classes from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store/Redux";

const Header = () => {
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.initialAuthState);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
