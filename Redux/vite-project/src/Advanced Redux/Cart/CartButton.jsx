import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../Redux store/CartRedux";

const CartButton = () => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(authSliceActions.showCart());
  };

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
