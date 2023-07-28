import Layout from "./Advanced Redux/Layout/Layout";
import Cart from "./Advanced Redux/Cart/Cart";
import Products from "./Advanced Redux/Shop/Products";

function App() {
  return (
    <>
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
