import Layout from "./Advanced Redux/Layout/Layout";
import Cart from "./Advanced Redux/Cart/Cart";
import Products from "./Advanced Redux/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendDataToCart } from "./Advanced Redux/Redux store/CartSlice";

function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(sendDataToCart(cart));
  }, [cart]);

  return (
    <>
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
