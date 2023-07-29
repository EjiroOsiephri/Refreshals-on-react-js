import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../Redux store/CartRedux";

const CartButton = () => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(authSliceActions.showCart());
  };

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
