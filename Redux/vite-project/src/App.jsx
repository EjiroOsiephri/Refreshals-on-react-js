import Layout from "./Advanced Redux/Layout/Layout";
import Cart from "./Advanced Redux/Cart/Cart";
import Products from "./Advanced Redux/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const toggleCart = useSelector((state) => state.ui.showCart);

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
